const router = require('express').Router();
const { findById, createNewPlaylist, validatePlaylist } = require('../../lib/playlist');
const { playlists } = require('../../data/playlists');

route.get('/playlists', (req, res) => {
  let results = playlists;
  if (req.query) {
    results = filterByQuery(req.query, results);
  }
  res.json(results);
});

route.get('/playlists/:id', (req, res) => {
  const result = findById(req.params.id, playlists);
  if (result) {
    res.json(result);
  } else {
    res.send(404);
  }
});

route.post('/playlists', (req, res) => {
  // set id based on what the next index of the array will be
  req.body.id = playlists.length.toString();

  if (!validatePlaylist(req.body)) {
    res.status(400).send('Playlist is not correctly formatted');
  } else {
    const playlist = createNewPlaylist(req.body, playlists);
    res.json(playlist);
  }
});

module.exports  = router;