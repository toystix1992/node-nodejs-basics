import { createWriteStream } from 'fs';
const basePath = './src/streams/files/fileToWrite.txt';

const write = async () => {
    const stream = createWriteStream(basePath, { encoding: 'utf-8' });
    process.stdin.pipe(stream);
};

await write();
