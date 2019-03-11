# Práctica 4: Redes con Sockets

## Escucha de conexiones con Sockets
### Enlace de un servidor a un puerto TCP
Vemos el esquema principal antes de hacer nuestro primer net-watcher

### Escribir datos en un socket
Empezamos a desarrollar el contenido de la función flecha '(link) => {}' como objeto sentinela.

![screenshot](https://i.gyazo.com/e70e4beb002129dc33a49ad3a0332acb.png)

### Conexión a un servidor TCP Socket con Telnet
Probaremos que el programa funciona, usando tres sesiones de terminal.
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

### Usando un objeto json
![screenshot](https://i.gyazo.com/f18a1faf2c2032aab82a9fa2a31e8f81.png)

### Escuchando en sockets unix
Hay que fijarse en la función listen() en la línea 26. Se puede observar que hace una llamada al fichero watcher.sock alojado en la carpeta /tmp . De esto sabemos que dicho servidor sólo será compatible con servicios unix, puesto que windows no dispone de esa ruta, y al no ser compatible existen los otros métodos.

![screenshot](https://i.gyazo.com/7f22ffa0aabd6bcaedf6e01644cd2e1e.png)

### LDJ
![screenshot](https://i.gyazo.com/50304b72f0b02766328b793919032363.png)

### Creando los atajos para las instrucciones
Para no tener que estar escribiendo las mismas isntrucciones una y otra vez no s creamos nuestra lista gulpfile para deerminar un alias que suponga la llamada de esas instrucciones que más frecuentemente usamos para nuestro proyecto sin tener que escribir la lista completa.

![screenshot](https://i.gyazo.com/709e9ebf8fe70e990805c29467faec57.png)

