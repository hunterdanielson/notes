var minimist = require('minimist');
// var args = minimist(process.argv.slice(2), {
//   string: 'lang',           // --lang xml
//   boolean: ['version'],     // --version
//   alias: { v: 'version' }
// })
console.log(minimist(process.argv));
