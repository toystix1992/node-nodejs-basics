import { writeFile, access, constants } from 'node:fs/promises';

const data = "I am fresh and young";
const message = "FS operation failed";
const create = async () => {
    try {
        await access('./src/fs/files/filesfresh.txt', constants.R_OK);
        throw new Error('file done successfully');
    }
    catch (e) {
        if (e.message === 'file done successfully') {
            throw new Error(message);
        } else {
            try {
                await writeFile("./src/fs/files/filesfresh.txt", data)
            }
            catch (e) {
                throw new Error(message);
            }
        }
    }
};

await create();
