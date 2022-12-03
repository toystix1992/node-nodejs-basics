import { env } from 'node:process';
const parseEnv = () => {
    const filteresVars = Object.entries(env)
        .filter(vari => vari[0].includes("RSS_"));
    filteresVars.forEach(vari => {
        console.log(`${vari[0]} = ${vari[1]}`);
    });
};

parseEnv();
