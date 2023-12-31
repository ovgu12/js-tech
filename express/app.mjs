import express from 'express';
import BookModel from './domain/BookModel.mjs';
const app = express();

app.use(express.json());

app.get('/books', async (req, res, next) => {
  const books = await BookModel.find({});
  res.send(books.map((b) => b.toDTO()));
});

app.post('/books', async (req, res, next) => {
  try {
    const book = await BookModel.create({ ...req.body });
    res.send(book.toDTO());
  } catch (err) {
    next(err);
  }
});

app.delete('/books', async (req, res, next) => {
  await BookModel.deleteMany({});
  res.send(null);
});

app.use((err, req, res, next) => {
  res.status(400);
  res.send(err);
});

app.listen(4000);
