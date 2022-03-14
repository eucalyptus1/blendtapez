const express = require('express');
const PORT = process.env.PORT || 3001;
const app = express();

// Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.listen(PORT, () => {
    console.log('server runiing on port ${PORT}');
});

debug.query('SELECT * FROM')

// Default response for any other request (Not Found)
app.use((req, res) => {
    res.status(404).end();
});