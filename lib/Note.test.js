const { Note } = require('./Note.js');

describe('notes test', () => {
 
  it('can add stuff', () => {
    const action = {
      type: 'add',
      payload: 'note'
    };

    const myNote = Note.add(action);
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
    
    const myNote = Note.execute(action);
    
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

    const badNote = Note.execute(badAction);

    expect(badNote).toEqual({
      error: 'oh no'
    });
  });
});
