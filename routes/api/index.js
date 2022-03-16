const router = require('express').Router();

const userRoutes = require('./user-routes');
const playlistRoutes = require('./playlist-routes');

router.use('/users', userRoutes);
router.use('/playlists', playlistRoutes);

module.exports = router;