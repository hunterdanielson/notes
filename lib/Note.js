const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  text: {
    type: String,
    required: true
  }
});

schema.statics.execute = function(action) {
  //multiple ifs, or switch
  if(action.type === 'add') {
    return this.create({
      text: action.payload
    });
  } else if(action.type === 'list') {
    return this.find();
  } else if(action.type === 'delete') {
    return this.findByIdAndDelete(action.payload);
  }
};

module.exports = mongoose.model('Note', schema);
