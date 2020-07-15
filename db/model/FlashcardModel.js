import mongoose from 'mongoose';
import FlashcardSchema from '../schema/FlashcardSchema.js';

export const FlashcardModel = mongoose.model('flashcard', FlashcardSchema);
