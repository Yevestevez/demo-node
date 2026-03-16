import { userInfo } from 'node:os';

const user = process.argv[2] ?? 'amigo';
const env = process.env.NODE_ENV ?? 'Development';
const API_KEY = process.env.API_KEY;

console.log(`Hola ${user} saludos de ${userInfo().username}`);
console.log(`Entorno: ${env}`);
console.log(`API_KEY: ${API_KEY}`);
