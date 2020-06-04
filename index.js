const mongoose = require('mongoose');

const { Input } = require('./lib/Input.js');
const Note = require('./lib/Note.js');

// make a new input class with command line arguements parsed in
const noteObject = new Input(process.argv);
console.log(noteObject);

if(Input.valid(noteObject)) { 
  Note.execute(noteObject)
    .then(() => mongoose.connection.close());
} else {
  console.log('error');
}

// not sure what this does
mongoose.connect('mongodb://localhost:27017/play', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});
