import {
    readFile,
    access,
    constants
} from 'node:fs/promises';

const basePath = './src/fs/files/fileToRead.txt';
const message = "FS operation failed";

const read = async () => {
    try {
        await access(basePath, constants.F_OK);
        try {
            const txt = await readFile(basePath, 'utf8');
            console.log(txt);
        } catch (err) {
            throw new Error(message);
        }
    }
    catch (error) {
        throw new Error(message);
    }
};

await read();
