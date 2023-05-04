const portfinder = require("portfinder");
const puppeteer = require("puppeteer");

const app = require("../index.js");

let server = null;
let port = null;

beforeEach(async () => {
  port = await portfinder.getPortPromise();
  server = app.listen(port);
});

afterEach(() => {
  server.close();
});

test("home paage links to about page", async () => {
  const browser = await puppeteer.launch({
    // Specifics for macOS
    executablePath: "/Applications/Chromium.app/Contents/MacOS/Chromium",
    headless: false,
  });
  const page = await browser.newPage();
  await page.goto(`http://localhost:${port}`);
  await Promise.all([
    page.waitForNavigation(),
    page.click('[data-test-id="about"]'),
  ]);

  expect(page.url()).toBe(`http://localhost:${port}/about`);
  await browser.close();
}, 10_000);
