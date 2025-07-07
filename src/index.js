#!/usr/bin/env node

const yargs = require('yargs');
const { hideBin } = require('yargs/helpers');

// Commands
const add = require('./commands/add');
const list = require('./commands/list');
const remove = require('./commands/remove');

yargs(hideBin(process.argv))
  .command(add)
  .command(list)
  .command(remove)
  .demandCommand(1, 'You need at least one command before moving on')
  .help()
  .argv;
