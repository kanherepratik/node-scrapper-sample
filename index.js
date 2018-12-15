const puppeteer = require("puppeteer");
const $ = require("cheerio");
const url =
  "https://www.nseindia.com/live_market/dynaContent/live_watch/get_quote/GetQuote.jsp?symbol=BHARTIARTL";

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.setViewport({ width: 1920, height: 926 });
  await page.goto(url);
  const data = await page.evaluate(() => {
    return document.querySelector("#companies ul.stock li.active #lastPrice")
      .innerText;
  });
  console.log(data);
  await browser.close();
})();
