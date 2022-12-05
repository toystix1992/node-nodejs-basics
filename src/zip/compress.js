import { createGzip } from 'zlib';
import { createWriteStream, createReadStream } from 'fs';
import { pipeline } from 'stream/promises';

const input = './src/zip/files/fileToCompress.txt';
const output = './src/zip/files/archive.gz';

const gzip = createGzip();
const source = createReadStream(input);
const destination = createWriteStream(output);

const compress = async () => {
    try {
        await pipeline(source, gzip, destination);
    } catch (error) {
        console.error(error);
        process.exitCode = 1;
    }
};

await compress();
