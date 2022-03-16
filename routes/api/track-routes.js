const express = require('express');
const router = express.Router();
const { Track, Playlist } = require('../../models');


router.get('/', (req, res) => {
  const trackData = Track.findAll(req.body, {
    attributes: ['id', 'track_name', 'track_url', 'created_at'],
    order: [['created_at', 'DESC']], 
    include: [
      {
        model: Playlist,
        attributes: ['user_id']
      }
    ]
  })
    .then(dbTrackData => {
      const track_arr = dbTrackData.map((track) => track.get({plain: true}))
      res.json(track_arr)
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.post('/', (req, res) => {

  Track.create({
    track_name: req.body.track_name,
    track_url: req.body.track_url,
    user_id: req.body.user_id
  })
    .then(dbTrackData => res.json(dbTrackData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;