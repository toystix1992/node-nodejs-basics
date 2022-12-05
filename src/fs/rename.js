import {
    rename as renameI,
    readdir,
} from 'node:fs/promises';

const basePath = './src/fs/files';
const message = "FS operation failed";
const rename = async () => {
    const files = await readdir(basePath);
    if (
        files.includes('properFilename.md') ||
        !files.includes('wrongFilename.txt')
    ) {
        throw new Error(message);
    } else {
        const renamedFile =  files.find(file => file === 'wrongFilename.txt');
        const oldFile = `${basePath}/${renamedFile}`;
        const newFile = `${basePath}/properFilename.md`;
        renameI(oldFile, newFile);
    }
};

await rename();
