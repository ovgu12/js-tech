import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);

fs.readFile(
  path.join(path.dirname(__filename), '../README.md'),
  (err, data) => {
    if (err) {
      console.error(err);
    } else {
      console.log(data.toString());
    }
  }
);
