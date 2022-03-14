const mysql = require('mysql2');

//Connect to database
const db = mysql.createConnection(
    {
        host: 'localhost',
        user: 'root',
        password: 'Lasm#0289',
        database: 'blendtapez'
    },
    console.log('Connected to the election database.')
);

module.exports = db;