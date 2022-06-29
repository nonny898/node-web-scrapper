import fs from 'fs';
import puppeteer from 'puppeteer';
import { cpuliquidPath } from './urls/cpuliquidUrls.js';

const evaluateElementToText = async (page, element) => {
  try {
    const text = await page.evaluate((element) => {
      const stringClensing = (str) => {
        const strTrimed = str.trim();
        if (strTrimed === '') {
          return '-';
        }
        if (strTrimed.includes('\n')) {
          return strTrimed.split('\n')[1].trim();
        }
        return strTrimed;
      };
      return stringClensing(element.textContent);
    }, element);
    return text;
  } catch (error) {
    return null;
  }
};

const evaluateSpecification = async (page, specElement) => {
  try {
    const spec = await page.evaluate((element) => {
      const stringClensing = (str) => {
        const strTrimed = str.trim();
        if (strTrimed === '') {
          return '-';
        }
        if (strTrimed.includes('\n')) {
          return strTrimed.split('\n')[1].trim();
        }
        return strTrimed;
      };

      const specObj = {};
      const items = element.querySelectorAll('div.row.bor_top');
      for (const item of items) {
        specObj[stringClensing(item.querySelector('div.quest').textContent)] =
          stringClensing(item.querySelector('div.answer').textContent);
      }
      return specObj;
    }, specElement);
    return spec;
  } catch (error) {
    return null;
  }
};

const evaluateImage = async (page, imageElement) => {
  try {
    const list = await page.evaluate((element) => {
      const imageList = [];
      const items = element.querySelectorAll(
        'div.img-thumbnail.col-pad-2.col-mr-0',
      );
      for (const item of items) {
        const imageThumb = item.querySelector(
          'img.img-responsive.img_thum.img_stand',
        );
        if (imageThumb) {
          const src = imageThumb.getAttribute('src');
          imageList.push(src.replace('icon', 'original'));
        }
      }
      return imageList;
    }, imageElement);
    return list;
  } catch (error) {
    return null;
  }
};

const scrape = async (url) => {
  const browser = await puppeteer.launch({});
  const page = await browser.newPage();
  try {
    await page.goto(url, { waitUntil: 'networkidle2' });
    const priceElementPromise = page.waitForSelector(
      'body > div#body.container:nth-child(10) > div.row > div.col-md-12 > div.row:nth-child(9) > div.col-lg-offset-1.col-lg-10.col-md-12.pad-lr-5 > div#product_wrap.text-left.ng-scope > div.col-lg-12.col-md-12.col-sm-12.col-xs-12:nth-child(2) > div.row > div.col-lg-4.col-md-4.col-sm-4.col-xs-12.pad-lr-5:nth-child(2) > div#price_box > div.col-lg-12.col-md-12.col-sm-12.col-xs-12:nth-child(5) > div.row > div.price_inner_2 > div.col-lg-12.col-md-12.col-sm-12.col-xs-12.text-center.price_block:nth-child(1) > strong:nth-child(3)',
    );
    const specElementPromise = page.waitForSelector(
      'body > div#body.container:nth-child(10) > div.row > div.col-md-12 > div.row:nth-child(9) > div.col-lg-offset-1.col-lg-10.col-md-12.pad-lr-5 > div#product_wrap.text-left.ng-scope > div.col-lg-12.col-md-12.col-sm-12.col-xs-12:nth-child(5) > div.row > div.detail:nth-child(1) > div.panel:nth-child(2) > div.panel-body.box_s:nth-child(2) > div#specspecial > div.col-md-12 > div.row',
    );
    const imageElementPromise = page.waitForSelector(
      'body > div#body.container:nth-child(10) > div.row > div.col-md-12 > div.row:nth-child(9) > div.col-lg-offset-1.col-lg-10.col-md-12.pad-lr-5 > div#product_wrap.text-left.ng-scope > div.col-lg-12.col-md-12.col-sm-12.col-xs-12:nth-child(2) > div.row > div.col-lg-8.col-md-8.col-sm-8.col-xs-12.pad-lr-5:nth-child(1) > div.row_box.mar-b-15:nth-child(2) > div.col-lg-1.col-lg-pull-11.col-md-1.col-md-pull-11.col-sm-1.col-sm-pull-11.col-xs-12.col-xss-12.col-pad-0:nth-child(2) > div#img-thum-wrap',
    );
    const titleElementPromise = page.waitForSelector(
      'body > div#body.container:nth-child(10) > div.row > div.col-md-12 > div.row:nth-child(9) > div.col-lg-offset-1.col-lg-10.col-md-12.pad-lr-5 > div#product_wrap.text-left.ng-scope > div.col-lg-12.col-md-12.col-sm-12.col-xs-12:nth-child(2) > div.row > div.col-lg-8.col-md-8.col-sm-8.col-xs-12.pad-lr-5:nth-child(1) > h1:nth-child(1) > a',
    );
    const [priceElement, specElement, imageElement, titleElement] =
      await Promise.all([
        priceElementPromise,
        specElementPromise,
        imageElementPromise,
        titleElementPromise,
      ]);
    const [price, spec, image, title] = await Promise.all([
      evaluateElementToText(page, priceElement),
      evaluateSpecification(page, specElement),
      evaluateImage(page, imageElement),
      evaluateElementToText(page, titleElement),
    ]);
    browser.close();
    return { title, ...spec, price, image };
  } catch (error) {
    browser.close();
    return null;
  }
};

const main = async () => {
  let result = [];
  let failedPath = [];
  // const path = [
  //   'https://www.jib.co.th/web/product/readProduct/33132/ASROCK-B450M-STEEL-LEGEND',
  // ];
  for (const url of cpuliquidPath) {
    console.log('🚀 ~ main ~ url', url);
    const productInfo = await scrape(url);
    if (productInfo) {
      result.push(productInfo);
    } else {
      failedPath.push(url);
    }
  }
  fs.writeFileSync('cpuLiquidInfo.json', JSON.stringify(result));
  fs.writeFileSync(
    'error/failedCpuLiquidUrls.json',
    JSON.stringify(failedPath),
  );
};

main();
