const {
    createHash
} = await import('node:crypto');
import {
    readFile,
} from 'node:fs/promises';
const basePath = './src/hash/files/fileToCalculateHashFor.txt';

const calculateHash = async () => {
    try {
        const contents = await readFile(basePath, { encoding: 'utf8' });
        const hashSum = createHash('sha256');
        hashSum.update(contents);
        const hex = hashSum.digest('hex');
        console.log(hex);
    } catch (err) {
        console.error(err.message);
    }
};

await calculateHash();
