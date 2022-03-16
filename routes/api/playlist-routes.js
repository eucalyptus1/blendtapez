const router = require('express').Router();
const { Playlist, User } = require('../../models');

// get all users
router.get('/', (req, res) => {
  Playlist.findAll({
    attributes: ['id', 'playlist_url', 'title', 'created_at'],
    include: [
      {
        model: User,
        attributes: ['username']
      }
    ]
  })
    .then(dbPlaylistData => res.json(dbPlaylistData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;