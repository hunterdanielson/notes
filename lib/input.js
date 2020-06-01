const minimist = require('minimist');

const parse = arr => {
  const obj = minimist(arr);
  delete obj._;

  const [[type, payload]] = Object.entries(obj);

  return {
    type,
    payload
  };
};
  
const valid = action => {
  // true if add or a and payload exists
  return action.payload && (action.type === 'add' || action.type === 'a');

};

module.exports = {
  parse,
  valid
};
