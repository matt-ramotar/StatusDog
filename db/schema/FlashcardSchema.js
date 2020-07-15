import mongoose from 'mongoose';

const FlashcardSchema = new mongoose.Schema();

FlashcardSchema.add({
  responseStatusCode: Number,
  responseClass: {
    Type: String,
    enum: [
      'Informational responses (100–199)',
      'Successful responses (200–299)',
      'Redirects (300–399)',
      'Client errors (400–499)',
      'Server errors (500–599)',
    ],
  },
  summary: String,
  picLocalPath: String,
  picURL: String,
  statusDogURL: String,
  mdnPageURL: String,
});

export default FlashcardSchema;
