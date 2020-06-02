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
    
  it('can execute', () => {
    const action = {
      type: 'add',
      payload: 'note'
    };
    
    const badAction = {
      type: 'random',
      payload: 'stuff'
    };
    
    const note = execute(action);
    const badNote = execute(badAction);
    
    expect(note).toEqual({
      id: expect.any(Number),
      text: 'note'
    });
    expect(badNote).toEqual({
      error: 'oh no'
    });
  });
});
