const express = require('express');
const app = express();
const port = process.env.PORT || 3002;

app.post('/login', (req, res) => {
  // dummy auth
  res.json({ token: 'fake-jwt-token' });
});

app.listen(port, () => console.log(`Auth service listening on ${port}`));