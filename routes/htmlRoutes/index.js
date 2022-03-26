const path = require('path');
const router = require('express').Router();

router.get('/playlist', (req, res) => {
  res.sendFile(path.join(__dirname, '../../public/playlist.html'));
});

router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../../public/make-a-playlist.html'));
});

router.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../../public/playlist.html'));
});



module.exports = router;