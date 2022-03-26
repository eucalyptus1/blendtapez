// const { playlists } = require('./data/playlists');
const express = require('express');

const sequelize = require('./config/connection');
const fs = require('fs');
const path = require('path');
const PORT = process.env.PORT || 3001;
const app = express();
// const cors = require('cors');


// const routes = require('./routes');
const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// app.use(routes);
app.use('/api', apiRoutes);
app.use('/', htmlRoutes);

// app.use(express.static('public'));

// app.use(cors({
//   origin: '*',
//   methods: ['GET', 'POST', 'DELETE']
// }));


sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log('Now listening'));
});

// app.listen(PORT, () => {
//     console.log(`API server now on port ${PORT}!`);
//   });