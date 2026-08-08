import fs from "node:fs/promises";
import path from "node:path";
import { Presentation, PresentationFile } from "@oai/artifact-tool";

const OUT = "E:/RadioNyra-main/RadioNyra-main/Radio_Nyra_Website_Update_Presentation.pptx";
const SHOTS = "E:/RadioNyra-main/RadioNyra-main/Radio_Nyra_Website_Update_Screenshots";
const R = {
  red: "#e50914",
  redDark: "#8f0710",
  black: "#050505",
  nearBlack: "#111111",
  charcoal: "#1b1b1f",
  white: "#ffffff",
  muted: "#f4f4f5",
  gray: "#71717a",
  blue: "#0057ff",
};

async function imageBlob(name) {
  const bytes = await fs.readFile(path.join(SHOTS, name));
  return bytes.buffer.slice(bytes.byteOffset, bytes.byteOffset + bytes.byteLength);
}

function addText(slide, text, pos, opts = {}) {
  const box = slide.shapes.add({
    geometry: "textbox",
    position: pos,
    fill: opts.fill ?? "none",
    line: opts.line ?? { style: "solid", fill: "none", width: 0 },
  });
  box.text = text;
  box.text.style = {
    fontSize: opts.size ?? 24,
    bold: opts.bold ?? false,
    color: opts.color ?? R.nearBlack,
    alignment: opts.align ?? "left",
    typeface: opts.face ?? "Aptos",
  };
  return box;
}

function addRect(slide, pos, fill, lineFill = "none", radius = "rounded-md") {
  return slide.shapes.add({
    geometry: "roundRect",
    position: pos,
    fill,
    line: { style: "solid", fill: lineFill, width: lineFill === "none" ? 0 : 2 },
    borderRadius: radius,
  });
}

function addHeader(slide, title, kicker = "Radio Nyra Website - YouTube Integration Progress Update") {
  addText(slide, kicker, { left: 54, top: 28, width: 820, height: 24 }, { size: 13, bold: true, color: R.red });
  addText(slide, title, { left: 54, top: 58, width: 940, height: 50 }, { size: 36, bold: true, color: R.nearBlack });
  slide.shapes.add({
    geometry: "rect",
    position: { left: 54, top: 116, width: 140, height: 5 },
    fill: R.red,
    line: { style: "solid", fill: "none", width: 0 },
  });
}

async function addImage(slide, name, pos, fit = "cover", alt = name) {
  return slide.images.add({
    blob: await imageBlob(name),
    contentType: "image/png",
    alt,
    fit,
    position: pos,
    geometry: "roundRect",
    borderRadius: "rounded-lg",
  });
}

function callout(slide, label, left, top, width = 220) {
  addRect(slide, { left, top, width, height: 40 }, R.red, R.red, "rounded-md");
  addText(slide, label, { left: left + 12, top: top + 9, width: width - 24, height: 22 }, {
    size: 16,
    bold: true,
    color: R.white,
    align: "center",
  });
}

function bulletList(slide, items, left, top, width, opts = {}) {
  const text = items.map((item) => `${opts.marker ?? "•"} ${item}`).join("\n");
  addText(slide, text, { left, top, width, height: opts.height ?? 250 }, {
    size: opts.size ?? 22,
    bold: opts.bold ?? false,
    color: opts.color ?? R.nearBlack,
  });
}

function notes(slide, text) {
  slide.speakerNotes.textFrame.setText(`[Sources]\n${text}`);
}

const deck = Presentation.create({ slideSize: { width: 1280, height: 720 } });

// Slide 1
{
  const slide = deck.slides.add();
  slide.background.fill = R.black;
  await addImage(slide, "02_homepage_hero_desktop.png", { left: 620, top: 0, width: 660, height: 720 }, "cover", "Updated Radio Nyra homepage hero screenshot");
  slide.shapes.add({ geometry: "rect", position: { left: 0, top: 0, width: 760, height: 720 }, fill: R.black, line: { style: "solid", fill: "none", width: 0 } });
  slide.shapes.add({ geometry: "rect", position: { left: 0, top: 0, width: 760, height: 720 }, fill: { color: R.black, transparency: 8 }, line: { style: "solid", fill: "none", width: 0 } });
  addText(slide, "Radio Nyra\nWebsite Update", { left: 72, top: 135, width: 610, height: 145 }, { size: 56, bold: true, color: R.white });
  addText(slide, "YouTube Integration Progress", { left: 72, top: 305, width: 560, height: 44 }, { size: 30, bold: true, color: R.red });
  addText(slide, "Prepared by:\nVadlapudi Pranab", { left: 72, top: 455, width: 420, height: 82 }, { size: 24, bold: true, color: R.white });
  notes(slide, "Screenshot captured from current local website at http://127.0.0.1:3002.");
}

// Slide 2
{
  const slide = deck.slides.add();
  slide.background.fill = R.white;
  addHeader(slide, "Homepage now foregrounds listening and watching");
  await addImage(slide, "02_homepage_hero_desktop.png", { left: 54, top: 145, width: 820, height: 462 }, "cover", "Updated homepage hero screenshot");
  callout(slide, "Hero Section", 96, 172, 170);
  callout(slide, "Listen Live", 370, 368, 150);
  callout(slide, "Watch on YouTube", 540, 620, 210);
  bulletList(slide, ["Hero Section", "Listen Live", "Watch on YouTube", "Latest Videos", "Navigation Improvements"], 920, 176, 300, { size: 24, height: 260 });
  addText(slide, "The top-of-page experience now connects live radio, YouTube viewing, and improved navigation in one clear entry point.", { left: 920, top: 488, width: 300, height: 94 }, { size: 20, color: R.gray });
  notes(slide, "Screenshot captured from the current updated homepage.");
}

// Slide 3
{
  const slide = deck.slides.add();
  slide.background.fill = R.black;
  addText(slide, "YouTube Integration Connects the Official Channel", { left: 54, top: 45, width: 850, height: 52 }, { size: 36, bold: true, color: R.white });
  addText(slide, "The website now connects visitors to the official Radio Nyra YouTube channel experience.", { left: 54, top: 102, width: 860, height: 36 }, { size: 20, color: "#d4d4d8" });
  await addImage(slide, "05_youtube_hub_top.png", { left: 54, top: 160, width: 650, height: 474 }, "cover", "YouTube hub top screenshot");
  await addImage(slide, "07_youtube_hub_playlists_view.png", { left: 730, top: 160, width: 496, height: 290 }, "cover", "YouTube playlists screenshot");
  bulletList(slide, ["Latest Videos", "Shorts", "Featured Videos", "Subscribe Button", "Watch Now", "Playlist Integration"], 748, 478, 420, { size: 22, color: R.white, height: 160 });
  callout(slide, "Subscribe Button", 940, 178, 210);
  callout(slide, "Playlist Integration", 930, 405, 230);
  notes(slide, "Screenshots captured from the current /youtube page and homepage YouTube integration.");
}

// Slide 4
{
  const slide = deck.slides.add();
  slide.background.fill = R.white;
  addHeader(slide, "Homepage improvements are visible in the updated site");
  await addImage(slide, "09_responsive_desktop.png", { left: 54, top: 154, width: 540, height: 338 }, "cover", "Current updated homepage desktop screenshot");
  await addImage(slide, "04_homepage_latest_videos_view.png", { left: 632, top: 154, width: 540, height: 338 }, "cover", "Current updated YouTube section screenshot");
  addText(slide, "Updated hero and navigation", { left: 80, top: 515, width: 420, height: 30 }, { size: 24, bold: true, color: R.nearBlack });
  addText(slide, "New YouTube discovery area", { left: 660, top: 515, width: 420, height: 30 }, { size: 24, bold: true, color: R.nearBlack });
  bulletList(slide, ["Better UI", "Better Layout", "Improved Navigation", "Better User Experience"], 90, 565, 1020, { size: 21, height: 80 });
  addText(slide, "Before-state screenshots were not available; this slide documents the current updated website only.", { left: 90, top: 660, width: 850, height: 24 }, { size: 16, color: R.gray });
  notes(slide, "Current website screenshots only. No before-state screenshot was available in the project artifacts inspected.");
}

// Slide 5
{
  const slide = deck.slides.add();
  slide.background.fill = R.white;
  addHeader(slide, "Latest videos now display directly on the homepage");
  await addImage(slide, "03_homepage_youtube_section.png", { left: 54, top: 150, width: 770, height: 505 }, "cover", "Homepage latest YouTube videos screenshot");
  addRect(slide, { left: 858, top: 178, width: 344, height: 246 }, R.black, R.black, "rounded-lg");
  addText(slide, "Latest Videos", { left: 890, top: 208, width: 280, height: 34 }, { size: 28, bold: true, color: R.white });
  addText(slide, "The section automatically displays current videos from the official Radio Nyra YouTube channel, helping visitors move from listening to watching without leaving the site.", { left: 890, top: 268, width: 268, height: 118 }, { size: 20, color: "#e4e4e7" });
  callout(slide, "Watch Now", 922, 465, 170);
  callout(slide, "Official Channel Feed", 870, 525, 250);
  notes(slide, "Screenshot captured from the current homepage YouTube section.");
}

// Slide 6
{
  const slide = deck.slides.add();
  slide.background.fill = R.nearBlack;
  addText(slide, "Responsive Design Works Across Key Viewports", { left: 54, top: 40, width: 890, height: 50 }, { size: 36, bold: true, color: R.white });
  await addImage(slide, "09_responsive_desktop.png", { left: 54, top: 130, width: 560, height: 350 }, "cover", "Desktop responsive screenshot");
  await addImage(slide, "10_responsive_tablet.png", { left: 650, top: 130, width: 255, height: 350 }, "cover", "Tablet responsive screenshot");
  await addImage(slide, "11_responsive_mobile.png", { left: 940, top: 130, width: 176, height: 350 }, "cover", "Mobile responsive screenshot");
  addText(slide, "Desktop", { left: 254, top: 505, width: 150, height: 28 }, { size: 24, bold: true, color: R.white, align: "center" });
  addText(slide, "Tablet", { left: 702, top: 505, width: 150, height: 28 }, { size: 24, bold: true, color: R.white, align: "center" });
  addText(slide, "Mobile", { left: 952, top: 505, width: 150, height: 28 }, { size: 24, bold: true, color: R.white, align: "center" });
  addText(slide, "The same updated experience adapts from full navigation to compact mobile layout while preserving Listen Live and YouTube access.", { left: 110, top: 590, width: 1030, height: 44 }, { size: 22, color: "#e4e4e7", align: "center" });
  notes(slide, "Screenshots captured from the current homepage at desktop, tablet, and mobile viewport sizes.");
}

// Slide 7
{
  const slide = deck.slides.add();
  slide.background.fill = R.white;
  addHeader(slide, "SEO and performance work supports discoverability");
  await addImage(slide, "09_responsive_desktop.png", { left: 700, top: 168, width: 490, height: 310 }, "cover", "Current homepage desktop screenshot");
  addRect(slide, { left: 700, top: 168, width: 490, height: 310 }, "none", "#e4e4e7", "rounded-lg");
  addRect(slide, { left: 72, top: 160, width: 555, height: 410 }, R.muted, "#e4e4e7", "rounded-lg");
  bulletList(slide, ["Better SEO through clearer page structure and YouTube routes", "Faster loading through optimized page sections and reusable components", "Better structure for homepage, YouTube hub, shorts, and playlists", "Improved user experience across navigation, media discovery, and responsive layouts"], 106, 198, 480, { size: 22, height: 320 });
  addText(slide, "The update strengthens both user discovery and search visibility by organizing radio, video, and channel content into clearer entry points.", { left: 90, top: 602, width: 640, height: 50 }, { size: 20, color: R.gray });
  notes(slide, "Current homepage screenshot used as visual evidence. Claims summarize implemented site structure visible in the current build.");
}

// Slide 8
{
  const slide = deck.slides.add();
  slide.background.fill = R.black;
  addText(slide, "Testing Status", { left: 64, top: 52, width: 500, height: 56 }, { size: 44, bold: true, color: R.white });
  addText(slide, "Current Stage", { left: 70, top: 125, width: 300, height: 34 }, { size: 26, bold: true, color: R.red });
  const done = ["Homepage Updated", "YouTube Integrated", "UI Improvements", "Responsive Design"];
  const active = ["Testing", "Debugging", "API Validation", "Performance Testing"];
  bulletList(slide, done, 110, 205, 470, { marker: "✓", size: 28, color: R.white, height: 190 });
  bulletList(slide, active, 682, 205, 470, { marker: "↻", size: 28, color: "#d4d4d8", height: 190 });
  addRect(slide, { left: 80, top: 480, width: 500, height: 70 }, R.redDark, R.red, "rounded-lg");
  addText(slide, "Completed implementation items are ready for validation.", { left: 110, top: 502, width: 440, height: 26 }, { size: 21, bold: true, color: R.white, align: "center" });
  addRect(slide, { left: 650, top: 480, width: 500, height: 70 }, R.charcoal, "#3f3f46", "rounded-lg");
  addText(slide, "Testing work remains active before production deployment.", { left: 680, top: 502, width: 440, height: 26 }, { size: 21, bold: true, color: R.white, align: "center" });
  notes(slide, "Testing status supplied by the user request.");
}

// Slide 9
{
  const slide = deck.slides.add();
  slide.background.fill = R.white;
  addHeader(slide, "Next steps move the update toward production");
  const steps = ["Complete Testing", "Fix Remaining Bugs", "Verify YouTube Statistics", "Final Review", "Production Deployment"];
  steps.forEach((step, i) => {
    const x = 82 + i * 225;
    addRect(slide, { left: x, top: 235, width: 170, height: 170 }, i === 4 ? R.red : R.nearBlack, i === 4 ? R.red : R.nearBlack, "rounded-lg");
    addText(slide, String(i + 1), { left: x + 58, top: 260, width: 54, height: 48 }, { size: 42, bold: true, color: R.white, align: "center" });
    addText(slide, step, { left: x + 12, top: 325, width: 146, height: 55 }, { size: 19, bold: true, color: R.white, align: "center" });
  });
  addText(slide, "The release path is focused on validating data accuracy, confirming performance, and completing final review before deployment.", { left: 144, top: 500, width: 990, height: 56 }, { size: 24, color: R.gray, align: "center" });
  notes(slide, "Next steps supplied by the user request.");
}

// Slide 10
{
  const slide = deck.slides.add();
  slide.background.fill = R.black;
  await addImage(slide, "05_youtube_hub_top.png", { left: 650, top: 0, width: 630, height: 720 }, "cover", "Radio Nyra YouTube hub screenshot");
  slide.shapes.add({ geometry: "rect", position: { left: 0, top: 0, width: 760, height: 720 }, fill: R.black, line: { style: "solid", fill: "none", width: 0 } });
  addText(slide, "Thank You", { left: 72, top: 160, width: 490, height: 76 }, { size: 64, bold: true, color: R.white });
  addText(slide, "Radio Nyra", { left: 72, top: 275, width: 420, height: 42 }, { size: 34, bold: true, color: R.red });
  addText(slide, "Website Enhancement Project", { left: 72, top: 335, width: 500, height: 40 }, { size: 27, color: R.white });
  addText(slide, "Prepared By\nVadlapudi Pranab", { left: 72, top: 470, width: 420, height: 76 }, { size: 24, bold: true, color: "#e4e4e7" });
  notes(slide, "Screenshot captured from the current /youtube page.");
}

await fs.mkdir(path.dirname(OUT), { recursive: true });
for (const [index, slide] of deck.slides.items.entries()) {
  const rendered = await deck.export({ slide, format: "png", scale: 1 });
  await fs.writeFile(
    `E:/RadioNyra-main/RadioNyra-main/codex_presentation_work/rendered-slide-${String(index + 1).padStart(2, "0")}.png`,
    Buffer.from(await rendered.arrayBuffer()),
  );
}
const montage = await deck.export({ format: "webp", montage: true, scale: 1 });
await fs.writeFile("E:/RadioNyra-main/RadioNyra-main/codex_presentation_work/deck-montage.webp", Buffer.from(await montage.arrayBuffer()));

const pptx = await PresentationFile.exportPptx(deck);
await pptx.save(OUT);
console.log(OUT);
