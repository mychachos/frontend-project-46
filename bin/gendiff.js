#!/usr/bin/env node

import { Command } from 'commander';
import genDiff from '../src/index.js';

const program = new Command();

program
   .description('Compares two configuration files and shows a difference')
   .version('11.0.0')
   .option('-f, --format <type>', 'output format')
   .arguments('<filepath1> <filepath2>')
   .action((file1, file2) => {
      console.log(genDiff(file1, file2));
   });

program.parse();
