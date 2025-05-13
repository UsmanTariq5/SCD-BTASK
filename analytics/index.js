const express = require('express');
const app = express();
const port = process.env.PORT || 3003;

app.get('/stats', (req, res) => {
  res.json({ users: 100, posts: 50 });
});

app.listen(port, () => console.log(`Analytics service listening on ${port}`));