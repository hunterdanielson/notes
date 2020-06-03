const minimist = require('minimist');
class Input {

  constructor(arr){
    const obj = minimist(arr);
    delete obj._;
    let [[type, payload]] = Object.entries(obj);
    if(type === 'a') type = 'add';
    this.type = type;
    this.payload = payload;
  }

  static valid(action) {
    return action.payload && (action.type === 'add' || action.type === 'delete') || action.type === 'list';
  }
}

module.exports = {
  Input
};
