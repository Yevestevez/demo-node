import { readFile } from 'node:fs';
import { resolve, join } from 'node:path';

const __dirname = resolve('.'); // resuelve el directorio actual -> '.'
const file = join(__dirname, 'data', 'sample.txt'); // Construye el resto del path
console.log(file);
readFile(file, { encoding: 'utf-8' }, (err, data) => {
    if (err) {
        console.error(err.message);
        return;
    }
    console.log(data);
});

console.log('Fin');
