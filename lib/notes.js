const add = action => {
  const note = {
    id: Date.now(),
    text: action.payload
  };
  return note;
};

const execute = action => {
  //multiple ifs, or switch
  if(action.type === 'add' || action.type === 'a') {
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
