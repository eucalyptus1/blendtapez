const router = require('express').router();
const sequelize = require('../config/connection');
const { Track, Album, Account, playlist } = require('../models');

router.get('/', (req, res) => {
    Post.findAll({
      attributes: [
        'playlist',
        'image_path',
    ],
    include: [
        {
        model: Comment,
        attributes: ['id', 'playlist', 'image_path'],
        include: {
            model: Album,
            attributes: ['id']
        }
        },
    ]
    })
    .then(dbPostData => {

    const albums = dbPostData.map(post => post.get({ plain: true }));

    // pass a single post object into the homepage template
    res.render('profile', { albums });
    })
    .catch(err => {
    console.log(err);
    res.status(500).json(err);
    });
});

router.get('/', (req, res) => {
    Post.findAll({
      attributes: [
        'username',
    ],
    include: [
        {
        model: User,
        attributes: ['username'],
        },
    ]
    })
    .then(dbPostData => {

    const albums = dbPostData.map(post => post.get({ plain: true }));

    // pass a single post object into the homepage template
    res.render('profile', { albums });
    })
    .catch(err => {
    console.log(err);
    res.status(500).json(err);
    });
});

module.exports = router;