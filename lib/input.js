const minimist = require('minimist');
class Input {

  parse(arr) {
    const obj = minimist(arr);
    delete obj._;
    let [[type, payload]] = Object.entries(obj);
    if(type === 'a') type = 'add';
    if(type === 'l') type = 'list';
  
    return {
      type,
      payload
    };
  }

  static valid(action) {
    return action.payload && (action.type === 'add' || action.type === 'delete') || action.type === 'list';
  }
}

module.exports = {
  Input
};
