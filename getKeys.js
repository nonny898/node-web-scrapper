import path from 'path';
import fs from 'fs';
import snakecase from 'snakecase';
import fsPromise from 'fs/promises';

const listDir = async () => {
  try {
    return fsPromise.readdir('./data');
  } catch (err) {
    console.error('Error occured while reading directory!', err);
  }
};

const flatKeys = (array) => {
  const keys = array.flat();
  return [...new Set(keys)];
};

const main = async () => {
  const allKeys = [];
  const files = await listDir();
  for (const fileName of files) {
    const filePath = path.join('./data', fileName);
    const rawData = await fsPromise.readFile(filePath);
    const jsonData = JSON.parse(rawData);
    const keys = flatKeys(jsonData.map((obj) => Object.keys(obj)));
    allKeys.push(keys);
  }
  fs.writeFileSync(
    'allKeys.json',
    JSON.stringify(
      flatKeys(allKeys)
        // .map((key) => snakecase(key))
        .sort(),
    ),
  );
};

main();
