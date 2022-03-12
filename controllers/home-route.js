const router = require('express').router();

router.get('/', (req, res) => {
    res.render('playlist');
});

module.exports = router;