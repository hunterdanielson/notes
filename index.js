const { parse, valid } = require('./lib/input.js');
const { execute } = require('./lib/notes.js');

let stuff = parse(process.argv);
if(valid(stuff)) {
  execute(stuff);
}


console.log(stuff);
