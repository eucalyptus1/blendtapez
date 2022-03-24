const express = require('express');
var path = require('path');
const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, './public/profile.html'));
  });

app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}!`);
  });