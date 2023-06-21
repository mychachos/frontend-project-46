#!/usr/bin/env node

import { Command } from 'commander';

const program = new Command();

program
   .option('-V, --version        output the version number')
   .option('-h, --help           output usage information');

program.addHelpText('before', `
   Compares two configuration files and shows a difference.
`);
