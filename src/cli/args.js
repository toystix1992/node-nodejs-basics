import { argv } from 'node:process';
const mergeKeyValue = (arr) => {
    let counter = 0;
    let solutionString = '';
    arr.forEach(element => {
        counter++;
        if (counter === 1) {
            solutionString += ` ${element} is `;
        } else if (counter === 2) {
            counter = 0
            solutionString += `${element},`;
        };
    });
    return solutionString;
}

export const parseArgs = () => {
    const args = argv.slice(2);
    const cleanArgs = args.map(arg => {
        const stringCutter = arg.includes('--') ? 2 : 0;
        return arg.slice(stringCutter)
    })
    console.log(mergeKeyValue(cleanArgs));
};

parseArgs();
