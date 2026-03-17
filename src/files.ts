import { readFileSync } from 'node:fs';

const file = './sample.txt';
const info = readFileSync(file, { encoding: 'utf-8' });
console.log(info);
console.log('Fin');
