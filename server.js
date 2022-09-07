const express = require('express');
const path = require('path');

const app = express();

// Make public assets available
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'index.html'));
})

app.get('/about', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'about.html'));
})

app.use((req, res) => {
  res.sendFile(path.join(__dirname, 'views', '404.html'))
})

app.listen(3000);