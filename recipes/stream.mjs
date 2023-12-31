import fs from 'fs';
import path from 'path';
import { Transform } from 'stream';

import { fileURLToPath } from 'url';

const __filePath = fileURLToPath(import.meta.url);
const file = path.join(path.dirname(__filePath), 'stream.out');
const fileTransform = path.join(
  path.dirname(__filePath),
  'stream-transform.out'
);

const outputStrean = fs.createWriteStream(file);

outputStrean.write('Hello\nWorld', () => {
  const inputStream = fs.createReadStream(file);
  inputStream.on('data', (chunk) => console.log(chunk.toString()));
  inputStream
    .pipe(
      new (class extends Transform {
        constructor() {
          super();
        }

        _transform(chunk, encoding, callback) {
          this.push(chunk.toString().toUpperCase());
          callback();
        }
      })()
    )
    .pipe(fs.createWriteStream(fileTransform));
});
