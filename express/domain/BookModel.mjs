import { Schema } from 'mongoose';
import mongo from '../mongo.mjs';

const BookSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
  },
  {
    collection: 'books',
  }
);

BookSchema.method({
  toDTO() {
    return {
      name: this.name,
    };
  },
});

export default mongo.model('BookModel', BookSchema);
