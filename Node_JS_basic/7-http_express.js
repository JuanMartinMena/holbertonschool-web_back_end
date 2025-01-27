const express = require('express');
const fs = require('fs');
const { promisify } = require('util');

// Promisify readFile for asynchronous reading
const readFileAsync = promisify(fs.readFile);

const app = express();

// Function to count students
const countStudents = async (path) => {
  try {
    const data = await readFileAsync(path, 'utf8');
    const lines = data.trim().split('\n').filter(line => line);

    if (lines.length === 0) {
      throw new Error('No valid data in the database');
    }

    const headers = lines[0].split(',');
    const students = lines.slice(1).map((line) => {
      const values = line.split(',');
      return Object.fromEntries(headers.map((header, idx) => [header, values[idx]]));
    });

    const totalStudents = students.length;
    const fields = {};

    students.forEach((student) => {
      const field = student.field;
      if (!fields[field]) {
        fields[field] = [];
      }
      fields[field].push(student.firstname);
    });

    let output = `Number of students: ${totalStudents}`;
    for (const [field, names] of Object.entries(fields)) {
      output += `\nNumber of students in ${field}: ${names.length}. List: ${names.join(', ')}`;
    }

    return output;
  } catch (error) {
    throw new Error('Cannot load the database');
  }
};

// Route for "/"
app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

// Route for "/students"
app.get('/students', async (req, res) => {
  const database = process.argv[2];
  if (!database) {
    res.status(500).send('Database file not specified');
    return;
  }

  try {
    const studentInfo = await countStudents(database);
    res.send(`This is the list of our students\n${studentInfo}`);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

// Server listens on port 1245
const PORT = 1245;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

// Export the app
module.exports = app;
