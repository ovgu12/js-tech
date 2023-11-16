import express from 'express';

const app = express();

app.get('/', (req, res, next) => {
  res.send({
    message: 'Hello World',
  });
});

app.listen(3000);
