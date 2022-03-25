// const { playlists } = require('./data/playlists');
const express = require('express');
const fs = require('fs');
const path = require('path');
const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// app.get('/api/playlists', (req, res) => {
//   let results = playlists;
//   console.log(req.query)
//   res.json(results);
// });

function createNewPlaylist(body, playlistsArray) {
  const playlist = body;
  playlistsArray.push(playlist);
  fs.writeFileSync(
    path.join(__dirname, './data/playlists.json'),
    JSON.stringify({ playlists: playlistsArray }, null, 2)
  );

  return playlist;
}

app.get('/playlists', (req, res) => {
  res.sendFile(path.join(__dirname, './public/playlist.html'));
});

function validatePlaylist(playlist) {
  if (!playlist.name || typeof playlist.name !== 'string') {
    return false;
  }
  if (!playlist.link || typeof playlist.link !== 'string') {
    return false;
  }

  return true;
}

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, './public/profile.html'));
  });

  app.post('/api/playlists', (req, res) => {
    req.body.id = playlists.length.toString();

    if (!validatePlaylist(req.body)) {
      res.status(400).send('Playlist is not correctly formatted.');
    } else {
    const playlist = createNewPlaylist(req.body, playlists);
    res.json(playlist);
    }
  });



app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}!`);
  });