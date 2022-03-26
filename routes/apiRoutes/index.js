const router = require('express').Router();
const playlistRoutes = require('../apiRoutes/playlistRoutes');

router.use(playlistRoutes);

module.exports = router;