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

app.post('/notes', (req, res) => {
  Note
    .execute(req.body)
    .then(note => res.send(note));
});
  
app.get('/notes', (req, res) => {
  Note
    .find()
    .then(notes => res.send(notes));
});
  
app.get('/notes/:id', (req, res) => {
  Note
    .findById(req.params.id)
    .then(note => res.send(note));
});
  
app.patch('/notes/:id', (req, res) => {
  Note
    .findByIdAndUpdate(req.params.id, req.body, { new: true })
    .then(note => res.send(note));
});
  
app.delete('/notes/:id', (req, res) => {
  Note
    .findByIdAndDelete(req.params.id)
    .then(note => res.send(note));
});
  
app.listen(7890, () => {
  console.log('Started on 7890');
});
