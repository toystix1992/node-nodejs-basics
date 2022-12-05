import { createUnzip } from 'zlib';
import { createWriteStream, createReadStream } from 'fs';
import { pipeline } from 'stream/promises';

const output = './src/zip/files/fileToCompress.txt';
const input = './src/zip/files/archive.gz';

const gzip = createUnzip();
const source = createReadStream(input);
const destination = createWriteStream(output);

const decompress = async () => {
    try {
        await pipeline(source, gzip, destination);
    } catch (error) {
        console.error(error);
        process.exitCode = 1;
    }
};

await decompress();
