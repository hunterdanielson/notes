const { MongoMemoryServer } = require('mongodb-memory-server');
const mongoose = require('mongoose');
const Note = require('./Note.js');

const mongodb = new MongoMemoryServer();

describe('Note model', () => {
  beforeAll(() => {
    return mongodb.getUri()
      .then(uri => mongoose.connect(uri, {
        useUnifiedTopology: true,
        useNewUrlParser: true
      }));
  });

  beforeEach(() => {
    return mongoose.connection.dropDatabase();
  });

  afterAll(() => {
    return mongoose.connection.close()
      .then(() => mongodb.stop());
  });

  it('can make a note with execute', () => {

    const action = {
      type: 'add',
      payload: 'hi'
    };

    return Note.execute(action)
      .then(note => {
        expect(note.toJSON()).toEqual({
          _id: expect.anything(),
          text: expect.any(String),
          __v: 0
        });
      });
  });

});
