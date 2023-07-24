import genDiff from '../src/index.js';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const getFixturePath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);
const readFile = (filename) => fs.readFileSync(getFixturePath(filename), 'utf-8');

const file1 = getFixturePath('file1.json');
const file2 = getFixturePath('file2.json');

test('giffTrees', () => {
   const actual = genDiff(file1, file2);
   const result = readFile('json.txt');
   expect(actual).toEqual(result);
});