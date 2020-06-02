const { Note } = require('./Note.js');

describe('notes test', () => {
  let note;
  beforeEach(() => {
    note = new Note;
  });
  it('can add stuff', () => {
    const action = {
      type: 'add',
      payload: 'note'
    };

    const myNote = note.add(action);
    expect(myNote).toEqual({
      id: expect.any(Number),
      text: 'note'
    });
  });
    
  it('can execute a good action', () => {
    const action = {
      type: 'add',
      payload: 'note'
    };
    
    const myNote = note.execute(action);
    
    expect(myNote).toEqual({
      id: expect.any(Number),
      text: 'note'
    });
   
  });
  it('can detect a bad action', () => {
    const badAction = {
      type: 'random',
      payload: 'stuff'
    };

    const badNote = note.execute(badAction);

    expect(badNote).toEqual({
      error: 'oh no'
    });
  });
});
