const express = require('express');

// Crear una instancia de la aplicación Express
const app = express();

// Definir la ruta raíz "/"
app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

// Configurar el servidor para escuchar en el puerto 1245
const PORT = 1245;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

// Exportar la aplicación
module.exports = app;
