const router = require('express').Router();

const usersRoutes = require('./usersRoutes.js');
const accountRoutes = require('./accountRoutes.js');
const albumRoutes = require('./albumRoutes.js');
const playlistRoutes = require('./playlistRoutes.js');
const trackRoutes = require('./trackRoutes.js');


router.use('/users', usersRoutes);
router.use('/account', accountRoutes);
router.use('/album', albumRoutes);
router.use('/playlist', playlistRoutes);
router.use('/track', trackRoutes);

module.exports = router;
