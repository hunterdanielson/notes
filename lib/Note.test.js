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

  it('can return a list of notes', async() => {
    const action = {
      type: 'add',
      payload: 'hi'
    };

    await Note.execute(action);

    return Note.execute({ type: 'list' })
      .then(notes => {
        expect(notes.map(note => note.toJSON())).toEqual([{
          _id: expect.anything(),
          text: expect.any(String),
          __v: 0
        }]);
      });
  });

  it('can delete a specific note', async() => {
    const addNote = {
      type: 'add',
      payload: 'hi'
    };
    const addSecond = {
      type: 'add',
      payload: 'hi there'
    };

    const note = await Note.execute(addNote);
    await Note.execute(addSecond);

    const deleteNote = {
      type: 'delete',
      payload: note._id
    };
    await Note.execute(deleteNote);

    return Note.execute({ type: 'list' })
      .then(notes => {
        expect(notes.map(note => note.toJSON())).toEqual([{
          _id: expect.anything(),
          text: expect.any(String),
          __v: 0
        }]);
      });
  });
});
