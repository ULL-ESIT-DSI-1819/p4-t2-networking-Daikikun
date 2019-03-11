'use strict';

const net = require('net');  // operaciones de enlace y conexión
const fs = require('fs');
const filename = process.argv[2];

const server = net.createServer((link) => {
  //usar el objeto de conexión para la transferencia de datos
  // report
  console.log("suscriptor conectado");
  // envía el primer trozo inmediatamente
  link.write(JSON.stringify({
    type: 'watching',
    file: filename
  }) + '\n');
  // configuración del observador
  let watcher = fs.watch(filename, () => {
    link.write(JSON.stringify({
      type: 'changed',
      file: filename,
      timestamp: Date.now()
    }) + '\n');
  });
  //limpiar
  link.on('close', () => {
    console.log('Suscriptor desconectado.');
    watcher.close();
  });
});
if(!filename) {
  throw Error('No se especificó ningún nombre de archivo de destino');
}

server.listen(5432, () => {
  console.log('Escuchando a la espera de suscriptores...');
});
