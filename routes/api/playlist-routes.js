const router = require('express').Router();
const { Playlist, User } = require('../../models');

// get all users
router.get('/', (req, res) => {
  Playlist.findAll({
    attributes: ['id', 'playlist_url', 'playlist_name', 'created_at'],
    order: [['created_at', 'DESC']], 
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

router.get('/:id', (req, res) => {
  Playlist.findOne({
    where: {
      id: req.params.id
    },
    attributes: ['id', 'playlist_url', 'playlist_name', 'created_at'],
    include: [
      {
        model: User,
        attributes: ['username']
      }
    ]
  })
    .then(dbPlaylistData => {
      if (!dbPlaylistData) {
        res.status(404).json({ message: 'No playlist found with this id' });
        return;
      }
      res.json(dbPlaylistData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.post('/', (req, res) => {

  Playlist.create({
    playlist_name: req.body.playlist_name,
    playlist_url: req.body.playlist_url,
    user_id: req.body.user_id
  })
    .then(dbPlaylistData => res.json(dbPlaylistData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.put('/:id', (req, res) => {
  Playlist.update(
    {
      playlist_name: req.body.playlist_name
    },
    {
      where: {
        id: req.params.id
      }
    }
  )
    .then(dbPlaylistData => {
      if (!dbPlaylistData) {
        res.status(404).json({ message: 'No playlist found with this id' });
        return;
      }
      res.json(dbPlaylistData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;