import {
    access,
    constants,
    unlink
} from 'node:fs/promises';

const basePath = './src/fs/files/fileToRemove.txt';
const message = "FS operation failed";

const remove = async () => {
    try {
        await access(basePath, constants.F_OK);
        try {
            await unlink(basePath);
            console.log('successfully deleted /tmp/hello');
        } catch (error) {
            console.error('there was an error:', error.message);
        }
    }
    catch (e) {
        throw new Error(message);
    }
};

await remove();
