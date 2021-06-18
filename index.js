const chalk = require('chalk');
const clear = require('clear');
const figlet = require('figlet');
const files = require('./lib/files');

const selectedFont = 'Doom';

clear();

console.log(
  chalk.yellow(
    figlet.textSync(selectedFont, {
        font:selectedFont,
        //font: 'larry3d', 
        horizontalLayout: 'full' 
    })
  )
);
// isometric2, roman, 