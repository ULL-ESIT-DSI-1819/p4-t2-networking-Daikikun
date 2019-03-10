# Práctica 4: Redes con Sockets

## Escucha de conexiones con Sockets
### Enlace de un servidor a un puerto TCP
Vemos el esquema principal antes de hacer nuestro primer net-watcher

### Escribir datos en un socket
Empezamos a desarrollar el contenido de la función flecha '(link) => {}' como objeto sentinela.

### Conexión a un servidor TCP Socket con Telnet
Probaremos que el rpograma funciona, usando tres sesiones de terminal.
* Uno para el servicio.
```console
$ node --harmony net-watcher.js target.txt
```
![screenshot](https://i.gyazo.com/6c6aeab7c2a6f929dc2442fff3bec7b3.png)
* Otro para el cliente.
```console
$ telnet localhost 5432
```
![screenshot](https://i.gyazo.com/f999aef3530306b9e35618f28f7c2e7e.png)
![screenshot](https://i.gyazo.com/80f3b1c943e523970a4ea9e68686bd48.png)

* Otro para hacer cambios.


## Implementar un protocolo de mensajes
## Creación de la conexión cleinte del socket
## Probando la funcionalidad de la aplicación de red
## Ampliación de core class en módulos personalizados
## Acabado final
