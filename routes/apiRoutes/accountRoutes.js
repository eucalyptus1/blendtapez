const router = require('express').Router();
const { Account, Track, Users, Album } = require('../../models');

//Get all playlists+album cover choice
router.get('/', (req, res) => {
//access Account model and run .findAll()
    Account.findAll({
      attributes: ['id', 'playlist', 'image_path'],
      include: [
        {
          model: Album,
          attributes: ['id']
        }
      ]
    })
    .then(dbAccountData => res.json(dbAccountData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

//get a single playlist+album cover
router.get('/:id', (req, res) => {
    Account.findOne({
        where: {
            id:req.params.id
        }
    })
    .then(dbUserData => {
        if (!dbUserData) {
          res.status(404).json({ message: 'A playlist does not exist with this id' });
          return;
        }
        res.json(dbUserData);
    })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

//Delete single playlist
router.delete('/:id', (req, res) => {
    Account.destroy({
        where: {
            id: req.params.id
        }
    })
    .then(dbUserData => {
      if (!dbUserData) {
        res.status(404).json({ message: 'No playlist found with this id' });
        return;
      }
      res.json(dbUserData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

//create playlist?
//{
//"playlist": "tester",
//"image_path": 2
//}
router.post('/', (req, res) => {
    Account.create({
        id: req.body.id,
        playlist: req.body.playlist,
        image_path: req.body.image_path
    })
    .then(dbUserData => res.json(dbUserData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;