var gulp = require("gulp");
var shell = require("gulp-shell");

  gulp.task("pre-install", shell.task([
        "npm i -g gulp static-server",
        "npm install -g nodemon",
        "npm install -g gulp-shell"
  ]));
  // servidores
  gulp.task("server-simple", shell.task("node --harmony net-watcher-simple/net-watcher.js target.txt"));
  gulp.task("server-unix", shell.task("node --harmony net-watcher-unix/net-watcher-unix.js target.txt"));
  gulp.task("server-json", shell.task("node --harmony net-watcher-json/net-watcher-json-server.js target.txt"));

  // clientes
  gulp.task("link-unix", shell.task("nc -U /tmp/watcher.sock"));
  gulp.task("link-json", shell.task("node --harmony net-watcher-json/net-watcher-json-client.js"));
  gulp.task("link-ldj", shell.task("node --harmony ldj/ldj-client.js"));

  // otras acciones
  gulp.task("pulse", shell.task("touch target.txt"));

  // otros atajos
  gulp.task("lint", shell.task("jshint *.js **/*.js"));
  gulp.task("get", shell.task("curl -v http://localhost:8000/file.txt"));
  gulp.task("put", shell.task("curl -v -X PUT -d 'Bye world!' http://localhost:8000/file.txt"));
  gulp.task("mkcol", shell.task("curl -v -X MKCOL http://localhost:8000/dir"));
  gulp.task("delete", shell.task("curl -v -X DELETE http://localhost:8000/file.txt"));
