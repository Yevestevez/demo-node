import { readFile } from 'node:fs/promises';

const file = './sample.txt';
readFile(file, { encoding: 'utf-8' })
    .then((info) => {
        console.log(info);
    })
    .catch((err: NodeJS.ErrnoException) => {
        console.error(err.message);
    });

console.log('Pasamos readFile a Node Event Loop y esperamos');
console.log('Seguimos esperando...');
console.log('Seguimos...');
console.log('Seguimos...');

setTimeout(() => {
    console.log('Fin');
}, 0);
