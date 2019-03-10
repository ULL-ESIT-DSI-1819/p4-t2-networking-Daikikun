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
![screenshot](https://i.gyazo.com/0f2953f57b2e7133f115420245c98be2.png)
* Otro para el cliente.
```console
$ telnet localhost 5432
```
![screenshot](https://i.imgur.com/J4ikLoV.png)
![screenshot](https://i.gyazo.com/80f3b1c943e523970a4ea9e68686bd48.png)

* Otro para hacer cambios.
```console
$ touch target.txt
```
![screenshot](https://i.gyazo.com/d1d7a97eed00e612f43110c49aa35e79.png)
![screenshot](https://i.gyazo.com/fc72a87a525b45396773ba73c59baa38.png)

Como la telnet de windows es especial el formato de la fecha sale como una ristra de números.




## Implementar un protocolo de mensajes
## Creación de la conexión cleinte del socket
## Probando la funcionalidad de la aplicación de red
## Ampliación de core class en módulos personalizados
## Acabado final
