#!/usr/bin/env node
/**
 * Screenshot Loop for Claude Code — V2 (fixed for Anthropic image limits)
 * MAX HEIGHT: 1500px per screenshot (prevents "exceeds dimension limit" error)
 * Uses puppeteer-core + system Chrome
 */
import puppeteer from 'puppeteer-core';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

async function takeScreenshot(target, outputPath) {
  // Ensure output directory exists
  const outputDir = path.dirname(outputPath);
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  const browser = await puppeteer.launch({
    headless: 'new',
    executablePath: '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  try {
    const page = await browser.newPage();

    // --- DESKTOP (1440px) ---
    await page.setViewport({ width: 1440, height: 900, deviceScaleFactor: 1 });
    let url = target.startsWith('http') ? target : `file://${path.resolve(target)}`;
    await page.goto(url, { waitUntil: 'networkidle2', timeout: 30000 });
    await new Promise(r => setTimeout(r, 2000));

    // Viewport-only (above the fold) — always safe
    const vpOutput = outputPath.replace('.png', '-viewport.png');
    await page.screenshot({ path: vpOutput, fullPage: false, type: 'png' });

    // Full page — but CAPPED at 1500px height via clip
    const bodyHeight = await page.evaluate(() => document.body.scrollHeight);
    const desktopSections = [];
    const SECTION_HEIGHT = 1400; // px per screenshot section

    for (let y = 0; y < bodyHeight; y += SECTION_HEIGHT) {
      const h = Math.min(SECTION_HEIGHT, bodyHeight - y);
      const sectionPath = outputPath.replace('.png', `-section-${Math.floor(y/SECTION_HEIGHT)+1}.png`);
      await page.screenshot({
        path: sectionPath,
        clip: { x: 0, y, width: 1440, height: h },
        type: 'png'
      });
      desktopSections.push(sectionPath);
    }

    // --- MOBILE (375px, scale 1 to keep under 2000px) ---
    await page.setViewport({ width: 375, height: 812, deviceScaleFactor: 1 });
    await new Promise(r => setTimeout(r, 1000));

    const mobileVpOutput = outputPath.replace('.png', '-mobile.png');
    await page.screenshot({ path: mobileVpOutput, fullPage: false, type: 'png' });

    // Mobile sections (max 3 to limit total images in context)
    const mobileBodyHeight = await page.evaluate(() => document.body.scrollHeight);
    const mobileSections = [];
    for (let y = 0; y < Math.min(mobileBodyHeight, SECTION_HEIGHT * 3); y += SECTION_HEIGHT) {
      const h = Math.min(SECTION_HEIGHT, mobileBodyHeight - y);
      const sectionPath = outputPath.replace('.png', `-mobile-section-${Math.floor(y/SECTION_HEIGHT)+1}.png`);
      await page.screenshot({
        path: sectionPath,
        clip: { x: 0, y, width: 375, height: h },
        type: 'png'
      });
      mobileSections.push(sectionPath);
    }

    console.log(`Screenshots saved:`);
    console.log(`  Viewport (1440x900): ${vpOutput}`);
    console.log(`  Desktop sections: ${desktopSections.length} files`);
    desktopSections.forEach(s => console.log(`    ${s}`));
    console.log(`  Mobile viewport: ${mobileVpOutput}`);
    console.log(`  Mobile sections: ${mobileSections.length} files`);
    mobileSections.forEach(s => console.log(`    ${s}`));
    console.log(`\n⚠️ All images capped at ${SECTION_HEIGHT}px height (Anthropic API limit safe)`);

  } finally {
    await browser.close();
  }
}

const [,, target = 'index.html', output = 'screenshots/current.png'] = process.argv;
takeScreenshot(target, output).catch(err => {
  console.error('Screenshot failed:', err.message);
  process.exit(1);
});
