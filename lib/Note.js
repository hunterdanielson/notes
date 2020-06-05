const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  text: {
    type: String,
    required: true
  }
});

schema.statics.execute = function(action) {
  //multiple ifs, or switch
  switch(action.type) {
    case 'add':
      return this.create({
        text: action.payload });
      // to console log local tests, but somehow breaks my tests
      // .then(note => {
      //   console.log(`Added ${note}`);
      // });

    case 'list':
      return this.find()
      // for local verification
        .then(notes => {
          console.log(notes);
          return notes;
        });

    case 'delete': 
      return this.findByIdAndDelete(action.payload)
      // for local verification
        .then(note => {
          console.log(`Deleted ${note}`);
          return note;
        });

    default: 
      console.log('error');
  }
};

module.exports = mongoose.model('Note', schema);
