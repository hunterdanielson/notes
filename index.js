var minimist = require('minimist');
const parse = require('./lib/input.js');

// var args = minimist(process.argv.slice(2), {
//   string: 'lang',           // --lang xml
//   boolean: ['version'],     // --version
//   alias: { v: 'version' }
// })
console.log(minimist(process.argv.slice(2)));

// console.log(parse(minimist(process.argv)));

