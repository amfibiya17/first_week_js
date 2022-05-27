const express = require('express');
const app = express();
const port = 3000;

let counter = 0;

app.get('/', (req, res) => {
  res.send('Hello, express! My name is Slava!')
});

app.post('/counter', (req, res) => {
  counter += 1;
  res.send(`${counter}`)
});

app.get('/counter', (req, res) => {
  res.send(`${counter}`)
});

app.delete('/counter', (req, res) => {
  counter = 0;
  res.send(`${counter}`)
});

console.log(`Server listening on localhost:${port}`);
app.listen(port);
