const express = require('express');
const router = express.Router();
const db = require('../../db/connection');

//Get all playlists+album cover choice
router.get('/profile', (req, res) => {
    const sql = `SELECT * FROM account`;
  
    db.query(sql, (err, rows) => {
      if (err) {
        res.status(500).json({ error: err.message });
        return;
      }
      res.json({
        message: 'success',
        data: rows,
      });
    });
});

//get a single playlist+album cover
router.get('/profile/:id', (req, res) => {
    const sql = `SELECT * FROM account WHERE id = ?`;
    const params = [req.params.id];
  
    db.query(sql, params, (err, row) => {
      if (err) {
        res.status(400).json({ error: err.message });
        return;
      }
      res.json({
        message: 'success',
        data: row
      });
    });
});

//Delete single playlist
router.delete('/profile/:id', (req, res) => {
    const sql = `DELETE FROM account WHERE id = ?`;
  
    db.query(sql, req.params.id, (err, result) => {
      if (err) {
        res.status(400).json({ error: res.message });
      } else if (!result.affectedRows) {
        res.json({
          message: 'Playlist not found'
        });
      } else {
        res.json({
          message: 'deleted',
          changes: result.affectedRows,
          id: req.params.id
        });
      }
    });
});

//create playlist?
//{
//"playlist": "tester",
//"image_path": 2
//}
router.post('/profile', ({ body }, res) => {
 
    const sql = `INSERT INTO account (playlist, image_path) VALUES (?,?)`;
    const params = [
      body.playlist,
      body.image_path,
    ];
  
    db.query(sql, params, (err, result) => {
      if (err) {
        res.status(400).json({ error: err.message });
        return;
      }
      res.json({
        message: 'success',
        data: body
      });
    });
  });

module.exports = router;