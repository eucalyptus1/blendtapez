const router = require('express').Router();

const userRoutes = require('./user-routes');
const playlistRoutes = require('./playlist-routes');
const trackRoutes = require('./track-routes')

router.use('/users', userRoutes);
router.use('/playlists', playlistRoutes);
router.use('/tracks', trackRoutes)

module.exports = router;