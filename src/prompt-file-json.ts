import { writeFile, readFile } from 'node:fs/promises';
import { resolve, join } from 'node:path';
// import promptSync from 'prompt-sync';

interface FileData {
    users: string[];
}

const __dirname = resolve('.');
const targetFile = join(__dirname, 'data', 'users.json');

// const prompt = promptSync();
// const name = prompt('Dime tu nombre: ');

const handleInput = (data: string | Buffer<ArrayBuffer>) => {
    const name = data.toString().trim();

    readFile(targetFile, { encoding: 'utf-8' })
        .then((fileContent) => {
            const data = JSON.parse(fileContent) as FileData;
            console.log(data);
            data.users.push(name);
            return JSON.stringify(data);
        })
        .then((fileContent) => {
            return writeFile(targetFile, fileContent);
        })
        .then(() => {
            console.log(`Hola ${name}, tu nombre ha sido registrado`);
            process.exit(0);
        })
        .catch((err: Error) => {
            console.error(err.message);
            process.exit(1);
        });
};

process.stdout.write('Escribe tu nombre: ');
process.stdin.on('data', handleInput);
