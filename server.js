const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send('Hello from Node.js server');
});

const server = app.listen(process.env.PORT || 3000, () => {
  console.log(`Hacker news server started on port: ${server.address().port}`);
});
