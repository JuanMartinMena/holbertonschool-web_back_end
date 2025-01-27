const http = require('http');
const fs = require('fs');
const path = require('path');

// Importar la función de lectura asincrónica de estudiantes
const countStudents = (filePath) => {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, 'utf-8', (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
        return;
      }

      const lines = data.split('\n').filter((line) => line.trim() !== '');
      const fields = {};
      let totalStudents = 0;

      lines.slice(1).forEach((line) => {
        const [firstname, lastname, age, field] = line.split(',');
        if (firstname && field) {
          totalStudents += 1;
          if (!fields[field]) fields[field] = [];
          fields[field].push(firstname);
        }
      });

      let result = `Number of students: ${totalStudents}`;
      for (const [field, students] of Object.entries(fields)) {
        result += `\nNumber of students in ${field}: ${students.length}. List: ${students.join(', ')}`;
      }
      resolve(result);
    });
  });
};

// Crear el servidor HTTP
const app = http.createServer((req, res) => {
  const { url } = req;

  if (url === '/') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello Holberton School!');
  } else if (url === '/students') {
    const databasePath = process.argv[2]; // Obtener el archivo de la base de datos desde los argumentos

    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.write('This is the list of our students\n');

    countStudents(databasePath)
      .then((result) => {
        res.end(result);
      })
      .catch((err) => {
        res.end(err.message);
      });
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Not Found');
  }
});

// Configurar el servidor para escuchar en el puerto 1245
app.listen(1245);

module.exports = app;
