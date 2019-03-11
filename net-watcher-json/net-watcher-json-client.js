"use strict";

const net = require('net');
const client = net.connect({port: 5432});

client.on('data', (data) => {
  let message = JSON.parse(data);
  if(message.type === 'watching') console.log("Actualmente está viendo: " + message.file);
  else if(message.type === 'changed')
  {
    let date = new Date(message.timestamp);
    console.log("Fichero '" + message.file + "' cambiado: " + date);
  }
  else throw Error("Tipo de mensaje no reconocido: " + message.type);
});
