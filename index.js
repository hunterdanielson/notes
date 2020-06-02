const { parse, valid } = require('./lib/input.js');
const { execute } = require('./lib/notes.js');

const noteObject = parse(process.argv);

if(valid(noteObject)) console.log(execute(noteObject));

console.log(noteObject);
