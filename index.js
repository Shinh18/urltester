#!/usr/bin/env node

const boxen = require('boxen');
const boxenOptions = require('./style/style');
const chalk = require('chalk');
const path = require('path');
const fileHandler = require('./utils/processFile');
const { printManual } = require('./utils/printManual');

const version = boxen(chalk.redBright.bold('Urltester 1.0.0'), boxenOptions);

if (process.argv.length == 2 || process.argv[2] === '--help') console.log(printManual());
else if (process.argv[2] === 'version' || process.argv[2] === '-v') console.log(version);
else {
  const filePath = path.join(__dirname, process.argv[2]);
  if (process.argv[3] === '-j' || process.argv[3] === '--json' || process.argv[3] === 'j') {
    fileHandler.processFile(filePath, true, 'none');
  } else if (
    process.argv[3] === '--all' ||
    process.argv[3] === '--good' ||
    process.argv[3] === '--bad'
  ) {
    fileHandler.processFile(filePath, false, process.argv[3]);
  } else {
    fileHandler.processFile(filePath, false, 'none');
  }
}
