import { Mongoose } from 'mongoose';

const mongoose = new Mongoose();

mongoose.set('debug', true);

export default mongoose.createConnection(
  'mongodb://root:example@localhost:27017/admin'
);
