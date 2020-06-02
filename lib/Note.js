class Note {

  static add(action) {
    const note = {
      id: Date.now(),
      text: action.payload
    };
    return note;
  }

  static execute(action) {
    //multiple ifs, or switch
    if(action.type === 'add') {
      return Note.add(action);
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
