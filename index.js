import fs from 'fs';
import puppeteer from 'puppeteer';

process.setMaxListeners(Infinity);

const categories = [
  'cpu',
  'mainboard',
  'vga',
  'ram',
  'harddisk',
  'ssd',
  'm2',
  'pccase',
  'powersupply',
  'cpucooler',
  'cpuliquid',
  'monitor',
  'keyboard',
  'mouse',
];

const getPagesUrl = async (initPage) => {
  const browser = await puppeteer.launch({});
  const page = await browser.newPage();
  await page.goto(initPage, { waitUntil: 'networkidle2' });
  try {
    const element = await page.waitForSelector(
      'body > div.col-md-12:nth-child(3) > div.row.text-center > div.page > ul.pagination',
    );
    if (element) {
      const pagination = await page.evaluate((element) => {
        const list = [];
        const items = element.querySelectorAll(
          'li.page:not(.next) > a.ajaxpage',
        );
        for (const item of items) {
          list.push(item.getAttribute('data-href'));
        }
        return list;
      }, element);
      browser.close();
      return pagination;
    }
    browser.close();
    return [];
  } catch (error) {
    browser.close();
    return [];
  }
};

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
  let result = [];
  const paths = [
    'https://www.jib.co.th/web/pcsetspec/load_product/cpu/0/?qty=0',
    // 'https://www.jib.co.th/web/pcsetspec/load_product/cpu/0/80/?qty=0',
    // 'https://www.jib.co.th/web/pcsetspec/load_product/cpu/0/160/?qty=0',
    // 'https://www.jib.co.th/web/pcsetspec/load_product/cpu/0/240/?qty=0',
  ];
  for (const url of paths) {
    const productUrl = await scrape(url);
    // console.log('🚀 ~ main ~ productUrl', productUrl);
    result = [...result, ...productUrl];
  }
  console.log('result :>> ', result.length);
  // console.log('JSON.stringify(result) :>> ', JSON.stringify(result));
  fs.writeFileSync('cpuUrls.js', `const cpuPath = ${JSON.stringify(result)}`);
};

const init = async () => {
  categories.forEach(async (category) => {
    const url = `https://www.jib.co.th/web/pcsetspec/load_product/${category}/0/?qty=0`;
    const pagination = await getPagesUrl(url);
    console.log([url, ...pagination]);
  });
};

// init();
main();
