const http = require('http');

// Crear el servidor HTTP
const app = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello Holberton School!');
});

// Configurar el servidor para escuchar en el puerto 1245
app.listen(1245);

module.exports = app;
