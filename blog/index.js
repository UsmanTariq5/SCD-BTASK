const express = require('express');
const app = express();
const port = process.env.PORT || 3001;

app.get('/posts', (req, res) => {
  res.json([{ id: 1, title: 'Hello World' }]);
});

app.listen(port, () => console.log(`Blog service listening on ${port}`));