var minimist = require('minimist');
const { parse } = require('./lib/input.js');


// var args = minimist(process.argv.slice(2), {
//   string: 'lang',           // --lang xml
//   boolean: ['version'],     // --version
//   alias: { v: 'version' }
// })

const minObject = minimist(process.argv);


console.log(parse(minObject));
// console.log(valid(minObject))

