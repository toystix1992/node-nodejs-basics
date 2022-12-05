import { stdin } from 'process';
import { spawn } from 'child_process';
const filePath = './src/cp/files/script.js'

export const spawnChildProcess = async (args) => {
    const childProcess = spawn('node', [filePath, ...args]);

    childProcess.stdout.pipe(process.stdout);
    stdin.pipe(childProcess.stdin);
};

spawnChildProcess(['arg1', 'arg2']);
