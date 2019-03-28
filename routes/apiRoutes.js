const express = require('express');
const router = express.Router();
const db = require('../models');

// get all books
router.get('/books', (req, res) => {
   db.Book.find({})
      .then(data => res.json(data))
      .catch(err => console.log(err));
});

// get one book
router.get('/books/:id', (req, res) => {
   db.Book.find({ _id: req.params.id })
      .then(data => res.json(data))
      .catch(err => console.log(err));
});

// post a book
router.post('/books', (req, res) => {
   db.Book.create(req.body)
      .then(data => res.json(data))
      .catch(err => console.log(err));
});

// delete a book
router.delete('/books/:id', (req, res) => {
   db.Book.remove({ _id: req.params.id })
      .then(data => res.json(data))
      .catch(err => console.log(err));
});

module.exports = router;