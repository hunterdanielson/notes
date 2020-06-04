const minimist = require('minimist');
class Input {

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

  static valid(action) {
    // true if payload exists and the type is add
    return action.payload && action.type === 'add';
  }
}

module.exports = {
  Input
};
