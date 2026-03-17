// Canales de comunicación con process:
// stdout, stdin, stderr

// console.log('Hola');
process.stdout.write('¡Hola!\n');
//console.error('¡Error!');
process.stderr.write('¡Error!\n');

process.stdout.write('Dinos tu nombre: ');
process.stdin.on('data', (data) => {
    const name = data.toString().trim();
    process.stdout.write(`Hola, ${name}! \n`);
    console.log('Fin del programa');
    process.exit(0);
});
