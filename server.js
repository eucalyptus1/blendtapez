const { playlists } = require('./data/playlists');
const express = require('express');
const fs = require('fs');
const path = require('path');
const PORT = process.env.PORT || 3001;
const app = express();
const cors = require('cors');
const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());
app.use('/api', apiRoutes);
app.use('/', htmlRoutes);
app.use(express.static('public'));



app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}!`);
  });