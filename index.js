const { parse, valid } = require('./lib/input.js');
const { execute } = require('./lib/notes.js');

let stuff = parse(process.argv);
let response;

if(valid(stuff)) {
  response = execute(stuff);
}

console.log(response);
console.log(stuff);
