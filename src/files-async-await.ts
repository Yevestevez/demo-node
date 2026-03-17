import { readFile } from 'node:fs/promises';

const file = './sample.txt';

try {
    const info = await readFile(file, { encoding: 'utf-8' });
    console.log(info);
} catch (err) {
    console.error((err as NodeJS.ErrnoException).message);
}

setTimeout(() => {
    console.log('Fin');
}, 0);
