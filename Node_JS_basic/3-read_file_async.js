const fs = require('fs');

function countStudents(path) {
    return new Promise((resolve, reject) => {
        fs.readFile(path, 'utf-8', (err, data) => {
            if (err) {
                reject(new Error('Cannot load the database'));
                return;
            }

            try {
                // Procesar contenido del archivo
                const lines = data.trim().split('\n').filter((line) => line.trim() !== '');
                const headers = lines.shift(); // Eliminar encabezados

                // Crear un mapa para agrupar por campo
                const studentsByField = {};
                let totalStudents = 0;

                lines.forEach((line) => {
                    const studentData = line.split(',');
                    if (studentData.length >= 4) {
                        const firstName = studentData[0];
                        const field = studentData[3];

                        if (!studentsByField[field]) studentsByField[field] = [];
                        studentsByField[field].push(firstName);

                        totalStudents++;
                    }
                });

                // Imprimir resultados
                console.log(`Number of students: ${totalStudents}`);
                Object.entries(studentsByField).forEach(([field, students]) => {
                    console.log(`Number of students in ${field}: ${students.length}. List: ${students.join(', ')}`);
                });

                resolve();
            } catch (processingError) {
                reject(new Error('Cannot load the database'));
            }
        });
    });
}

module.exports = countStudents;
