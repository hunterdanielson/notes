const { parse, valid } = require('./lib/Input.js');
const { execute } = require('./lib/Notes.js');

const noteObject = parse(process.argv);

if(valid(noteObject)) console.log(execute(noteObject));

console.log(noteObject);
