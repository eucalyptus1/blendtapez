const path = require('path');
const router = require('express').Router();

router.get('/playlist', (req, res) => {
  res.sendFile(path.join(__dirname, '../../public/playlist.html'));
});

app.get('/make-a-playlist', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/make-a-playlist.html'));
  });



module.exports = router;