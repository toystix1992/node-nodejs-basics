import {
    readdir,
} from 'node:fs/promises';

const basePath = './src/fs/files';
const message = "FS operation failed";

const list = async () => {
    try {
        const files = await readdir(basePath);
        for (const file of files) {
            console.log(file);
        }
    } catch (err) {
        throw new Error(message);
    }
};

await list();
