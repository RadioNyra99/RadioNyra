import fs from "node:fs/promises";
import path from "node:path";
import { createRequire } from "node:module";

const require = createRequire(import.meta.url);
const { chromium } = require("C:/Users/VADLAPUDI PRANAB/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/playwright");

const baseUrl = "http://127.0.0.1:3002";
const outDir = path.resolve("E:/RadioNyra-main/RadioNyra-main/Radio_Nyra_Website_Update_Screenshots");

async function ensureDir(dir) {
  await fs.mkdir(dir, { recursive: true });
}

async function waitForPage(page) {
  await page.waitForLoadState("domcontentloaded");
  await page.waitForTimeout(12000);
}

async function screenshotElement(page, selector, fileName, fallbackFull = false) {
  const locator = page.locator(selector).first();
  try {
    await locator.scrollIntoViewIfNeeded({ timeout: 10000 });
    await page.waitForTimeout(900);
    await locator.screenshot({ path: path.join(outDir, fileName) });
  } catch (error) {
    if (!fallbackFull) throw error;
    await page.screenshot({ path: path.join(outDir, fileName), fullPage: false });
  }
}

async function capturePage(browser, name, url, viewport, tasks) {
  const page = await browser.newPage({ viewport, deviceScaleFactor: 1 });
  await page.addInitScript(() => {
    localStorage.setItem("hasSeenEmailPopup", "true");
  });
  await page.goto(url, { waitUntil: "domcontentloaded", timeout: 90000 });
  await waitForPage(page);
  await tasks(page);
  await page.close();
}

await ensureDir(outDir);

const browser = await chromium.launch({
  headless: true,
  executablePath: "C:/Program Files/Google/Chrome/Application/chrome.exe",
});

await capturePage(browser, "homepage", baseUrl, { width: 1440, height: 1050 }, async (page) => {
  await page.screenshot({ path: path.join(outDir, "01_homepage_full_desktop.png"), fullPage: true });
  await page.screenshot({ path: path.join(outDir, "02_homepage_hero_desktop.png"), fullPage: false });
  await screenshotElement(page, "#watch-on-youtube", "03_homepage_youtube_section.png", true);
  await page.locator("#watch-on-youtube").scrollIntoViewIfNeeded();
  await page.waitForTimeout(1200);
  await page.screenshot({ path: path.join(outDir, "04_homepage_latest_videos_view.png"), fullPage: false });
});

await capturePage(browser, "youtube-hub", `${baseUrl}/youtube`, { width: 1440, height: 1050 }, async (page) => {
  await page.screenshot({ path: path.join(outDir, "05_youtube_hub_top.png"), fullPage: false });
  await page.getByRole("heading", { name: /Trending Shorts/i }).scrollIntoViewIfNeeded();
  await page.waitForTimeout(1200);
  await page.screenshot({ path: path.join(outDir, "06_youtube_hub_shorts_view.png"), fullPage: false });
  await page.getByRole("heading", { name: /Curated Playlists/i }).scrollIntoViewIfNeeded();
  await page.waitForTimeout(1200);
  await page.screenshot({ path: path.join(outDir, "07_youtube_hub_playlists_view.png"), fullPage: false });
  await page.screenshot({ path: path.join(outDir, "08_youtube_hub_full.png"), fullPage: true });
});

await capturePage(browser, "desktop-responsive", baseUrl, { width: 1440, height: 900 }, async (page) => {
  await page.screenshot({ path: path.join(outDir, "09_responsive_desktop.png"), fullPage: false });
});

await capturePage(browser, "tablet-responsive", baseUrl, { width: 820, height: 1180 }, async (page) => {
  await page.screenshot({ path: path.join(outDir, "10_responsive_tablet.png"), fullPage: false });
});

await capturePage(browser, "mobile-responsive", baseUrl, { width: 390, height: 844 }, async (page) => {
  await page.screenshot({ path: path.join(outDir, "11_responsive_mobile.png"), fullPage: false });
});

await browser.close();
console.log(outDir);
