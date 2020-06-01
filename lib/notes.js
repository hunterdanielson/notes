const minimist = require('minimist');

const add = action => {
  const note = {
    text: action.payload
  };

  return note;
};

const execute = action => {
  //multiple ifs, or switch
  if(action.type === 'add') {
    add(action);
  }

};

module.exports = {
  add,
  execute
};
