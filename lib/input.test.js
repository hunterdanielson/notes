const { parse, valid } = require('./input.js');

describe('input functions', () => {
  it('can parse command line input', () => {
    const commandArgs = ['node', 'index.js', '--add', 'stringy string'];
    const action = parse(commandArgs);

    expect(action).toEqual({
      type: 'add',
      payload: 'stringy string'
    });
  });

  it('can validate command line input', () => {
    const action = {
      type: 'add',
      payload: 'note'
    };
    const badAction = {
      type: 'something',
      payload: 'nope'
    };

    const isValid = valid(action);
    const notValid = valid(badAction);
    expect(isValid).toBeTruthy();
    expect(notValid).toBeFalsy();
  });

});
