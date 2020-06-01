const minimist = require('minimist');

const add = action => {
  const note = {
    id: 1,
    text: action.payload
  };

  return note;
};

const execute = action => {
  //multiple ifs, or switch
  if(action.type === 'add') {
    return add(action);
  } else {
    return {
      error: 'oh no'
    };
  }

};

module.exports = {
  add,
  execute
};
