import { writeFile, readFile } from 'node:fs/promises';
import { resolve, join } from 'node:path';
import promptSync from 'prompt-sync';

const __dirname = resolve('.');
const targetFile = join(__dirname, 'data', 'users.txt');

const prompt = promptSync();
const name = prompt('Dime tu nombre: ');

writeFile(targetFile, name)
    .then(() => {
        return readFile(targetFile, { encoding: 'utf-8' });
    })
    .then((data) => {
        console.log(
            `Hola ${data}, tu nombre ha sido añadido al archivo users.txt`,
        );
    })
    .catch((err: Error) => {
        console.error(err.message);
    });
