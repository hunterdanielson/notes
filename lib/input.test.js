const { Input } = require('./Input.js');

describe('input functions', () => {
  let input;
  beforeEach(() => {
    input = new Input;
  });

  it('can parse command line input', () => {
    const commandArgs = ['node', 'index.js', '--add', 'stringy string'];

    expect(input.parse(commandArgs)).toEqual({
      type: 'add',
      payload: 'stringy string'
    });
  });

  it('can validate good command line input', () => {
    const action = {
      type: 'add',
      payload: 'note'
    };
    const isValid = Input.valid(action);
    expect(isValid).toBeTruthy(); 
  });
  
  it('can validate bad command line input', () => {
    const badAction = {
      type: 'something',
      payload: 'nope'
    };
    const notValid = Input.valid(badAction);
    expect(notValid).toBeFalsy();
  });
});
