const express = require('express');
const router = express.Router();

router.use(require('./accountRoutes'));
router.use(require('./albumRoutes'));
router.use(require('./playlistRoutes'));
router.use(require('./trackRoutes'));
router.use(require('./usersRoutes'));

module.exports = router;
