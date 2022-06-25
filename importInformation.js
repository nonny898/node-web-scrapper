import puppeteer from 'puppeteer';

const scrape = async (url) => {
  const browser = await puppeteer.launch({});
  const page = await browser.newPage();
  await page.goto(url, { waitUntil: 'networkidle2' });

  /**
   * Test
   */
  // const element = await page.waitForSelector('body');
  // const urls = await page.evaluate((element) => element.innerHTML, element);
  // browser.close();
  // return urls;

  /**
   * Real
   */
  const element = await page.waitForSelector(
    'body > div.col-md-12.list_pro_set:nth-child(2) > div.row',
  );
  const urls = await page.evaluate((element) => {
    const list = [];
    const items = element.querySelectorAll(
      'div.col-md-3.col-sm-4.col-xs-6.col-xss-12.box_product',
    );
    for (const item of items) {
      list.push(
        item
          .querySelector(
            'div.row:nth-child(3) > div.col-md-12 > div.col-md-12.pad-0.text-center.mar-10-0:nth-child(3) > a.detail.btn.btndes:nth-child(2)',
          )
          .getAttribute('href'),
      );
    }
    return list;
  }, element);
  browser.close();
  return urls;
};

const main = async () => {
  const paths = [
    'https://www.jib.co.th/web/product/readProduct/33132/ASROCK-B450M-STEEL-LEGEND',
  ];
  for (const url of paths) {
    const productInfo = await scrape(url);
    console.log('🚀 ~ main ~ productInfo', productInfo);
    // console.log('🚀 ~ main ~ productUrl', productUrl);
    // result = [...result, ...productUrl];
  }
};
