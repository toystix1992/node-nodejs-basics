import { stdin, stdout } from 'process';
import { Transform } from 'node:stream';

const myTransform = new Transform({
    transform(data, _, callback) {
        callback(null, String(data).split('').reverse().join(''));
    }
});

const transform = async () => {
    stdin.on("data", data => {
        myTransform
        stdout.write(data)
    })
};

await transform();
