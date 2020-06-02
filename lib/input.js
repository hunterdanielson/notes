const minimist = require('minimist');

class Input {
  constructor(arr) {
    this.arr = arr;
  }

  parse(arr) {
    const obj = minimist(arr);
    delete obj._;
    let [[type, payload]] = Object.entries(obj);
    if(type === 'a') type = 'add';
  
    return {
      type,
      payload
    };
  }

  valid(action) {
    // true if add and payload exists
    return action.payload && action.type === 'add';
  }
}


module.exports = {
  Input
};
