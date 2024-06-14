// Create web server
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.json());

// Create a list of comments
let comments = [
  {
    id: 1,
    comment: 'Hello world!'
  },
  {
    id: 2,
    comment: 'Hello again!'
  }
];

// Get all comments
app.get('/comments', (req, res) => {
  res.json(comments);
});

// Get a comment by id
app.get('/comments/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const comment = comments.find(comment => comment.id === id);
  res.json(comment);
});

// Create a new comment
app.post('/comments', (req, res) => {
  const comment = req.body;
  comments.push(comment);
  res.json(comment);
});

// Update a comment by id
app.put('/comments/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const newComment = req.body;
  const comment = comments.find(comment => comment.id === id);
  comment.comment = newComment.comment;
  res.json(comment);
});

// Delete a comment by id
app.delete('/comments/:id', (req, res) => {
  const id = parseInt(req.params.id);
  comments = comments.filter(comment => comment.id !== id);
  res.json({ id });
});

// Start the server
app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});