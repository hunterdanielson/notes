class Note {

  constructor(action) {
    this.action = action;
  }

  add(action) {
    const note = {
      id: Date.now(),
      text: action.payload
    };
    return note;
  }

  execute(action) {
    //multiple ifs, or switch
    if(action.type === 'add') {
      return this.add(action);
    } else {
      return {
        error: 'oh no'
      };
    }
  }
}

module.exports = {
  Note
};
