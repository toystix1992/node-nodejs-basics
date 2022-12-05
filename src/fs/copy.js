import {
    mkdir,
    access,
    constants,
    readdir,
    copyFile
} from 'node:fs/promises';

const path = {
    from: './src/fs/files',
    to: './src/fs/files_copy',
}
const message = "FS operation failed";
const copy = async () => {
    try {
        await access(path.from, constants.F_OK);
        try {
            await access(path.to, constants.F_OK);
            throw new Error('exist');
        }
        catch (e) {
            if (e.message === 'exist') {
                throw new Error(message);
            } else {
                try {
                    await mkdir(path.to, { recursive: true });
                    try {
                        const files = await readdir(path.from);
                        for (const file of files) {
                            try {
                                await copyFile(`${path.from}/${file}`, `${path.to}/to${file}`);
                                console.log('source.txt was copied to destination.txt');
                            } catch (err) {
                                console.log(err);
                            }
                        }
                    } catch (err) {
                        console.log(err);
                    }
                } catch (err) {
                    console.error(err.message);
                }
            }
        }
    } catch (err) {
        throw new Error(err);
    }
};

copy();
