import fs from 'fs';
import path from 'path';
import _ from 'lodash';


const giffTrees = (data1, data2) => {
   const result = [];
   const keys = _.sortBy(_.union(Object.keys(data1), Object.keys(data2)));
   keys.map((key) => {
      const value1 = data1[key];
      const value2 = data2[key];

      if (_.has(data1, key) && !_.has(data2, key)) {
         result.push(` - ${key}: ${value1}`);
      }
      if (!_.has(data1, key) && _.has(data2, key)) {
         result.push(` + ${key}: ${value2}`);
      }
      if (_.has(data1, key) && _.has(data2, key)) {
         if (value1 === value2) {
            result.push(`   ${key}: ${value1}`);
         }
         if (value1 !== value2) {
            result.push(` - ${key}: ${value1}`);
            result.push(` + ${key}: ${value2}`);
         }
      }
   });
   return `{\n${result.join('\n')}\n}`;
};
const getExtension = (file) => path.extname(file);
const parser = (file, extension) => {
   if (extension === '.json')
      return JSON.parse(file);
};


export default (file1, file2) => {
   const way1 = path.resolve(process.cwd(), file1);
   const way2 = path.resolve(process.cwd(), file2);
   const data1 = parser(fs.readFileSync(way1, 'utf-8'), getExtension(file1));
   const data2 = parser(fs.readFileSync(way2, 'utf-8'), getExtension(file2));

   return giffTrees(data1, data2);
};