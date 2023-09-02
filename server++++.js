app.get('/search', (req, res) => {
  const searchQuery = req.query.q;
  if (!searchQuery) {
    res.redirect(302, '/');
    return;
  }

  console.log(searchQuery);
  res.status(200).end();
});

