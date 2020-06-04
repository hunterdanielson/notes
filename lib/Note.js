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
        text: action.payload
      });

    case 'list':
      return this.find();

    case 'delete': 
      return this.findByIdAndDelete(action.payload);
  }
};

module.exports = mongoose.model('Note', schema);
