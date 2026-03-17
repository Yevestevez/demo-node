import promptSync from 'prompt-sync';

const prompt = promptSync();
const name = prompt('Dime tu nombre: '); // promptSync bloquea el hilo
console.log(`Hola ${name}`);
console.log('Fin'); // solo llegamos aquí cuando el hilo se desbloquea
