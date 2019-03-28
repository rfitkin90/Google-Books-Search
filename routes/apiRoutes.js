const express = require('express');
const router = express.Router();
const db = require('../models');

// get all books
router.get('/books', (req, res) => {
   db.Book.find({})
      .then(data => res.json(data))
      .catch(err => console.log(err));
});

// get some books by name books
router.get('/books/:searchTerm', (req, res) => {
   db.Book.find({ title: { $regex: req.params.searchTerm, $options: "i" } })
      .then(data => res.json(data))
      .catch(err => console.log(err));
});

// get all books from the saves array
router.get('/books/:savesArr', (req, res) => {
   model.find({ _id: { $in: savesArr } })
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