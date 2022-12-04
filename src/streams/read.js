
import { createReadStream } from 'fs';
const basePath = './src/streams/files/fileToRead.txt';

const read = async () => {
    const stream = createReadStream(basePath, { encoding: 'utf-8' });
    stream.pipe(process.stdout);
};

await read();
