'use strict';

const net = require('net');  // operaciones de enlace y conexión
const fs = require('fs');
const filename = process.argv[2];

const server = net.createServer((link) => {
  //usar el objeto de conexión para la transferencia de datos
  // report
  console.log("suscriptor conectado");
  link.write("Ahora esta viendo " + filename + " esperando por cambios...\n");
  // configuración del observador
  let watcher = fs.watch(filename, () => {
    link.write("Fichero " + filename + " cambiado: " + Date.now() + "\n");
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

server.listen('/tmp/watcher.sock', () => {
  console.log('Escuchando a la espera de suscriptores...');
});
