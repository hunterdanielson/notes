const { Input } = require('./lib/Input.js');
const { Note } = require('./lib/Note.js');


const noteObject = new Input;
const noteObjectParse = noteObject.parse(process.argv);

if(Input.valid(noteObjectParse)) console.log('my note', Note.execute(noteObjectParse));

console.log(noteObjectParse);
