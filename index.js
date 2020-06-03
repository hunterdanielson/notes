const express = require('express');
const app = express();
const mongoose = require('mongoose');

const { Input } = require('./lib/Input.js');
const Note = require('./lib/Note.js');

mongoose.connect('mongodb://localhost:27017/play', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

app.use(express.json());

// make a note
app.post('/notes', (req, res) => {
  Note
    .execute(req.body)
    .then(note => res.send(note));
});
  
// get all notes
app.get('/notes', (req, res) => {
  Note
    .find()
    .then(notes => res.send(notes));
});
  
// get a specific note
app.get('/notes/:id', (req, res) => {
  Note
    .findById(req.params.id)
    .then(note => res.send(note));
});
 
// delete a note by id
app.delete('/notes/:id', (req, res) => {
  Note
    .findByIdAndDelete(req.params.id)
    .then(note => res.send(note));
});
  
// port 3000 best port
app.listen(3000, () => {
  console.log('Started on 3000');
});
