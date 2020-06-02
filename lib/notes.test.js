const { add, execute } = require('./notes.js');

describe('notes test', () => {
  it('can add stuff', () => {
    const action = {
      type: 'add',
      payload: 'note'
    };
    const note = add(action);
    expect(note).toEqual({
      id: expect.any(Number),
      text: 'note'
    });
  });
    
  it('can execute a good action', () => {
    const action = {
      type: 'add',
      payload: 'note'
    };
    
    const note = execute(action);
    
    expect(note).toEqual({
      id: expect.any(Number),
      text: 'note'
    });
   
  });
  it('can detect a bad action', () => {
    const badAction = {
      type: 'random',
      payload: 'stuff'
    };

    const badNote = execute(badAction);

    expect(badNote).toEqual({
      error: 'oh no'
    });
  });
});
