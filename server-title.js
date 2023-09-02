app.get('/', (req, res) => {
  res.render('home', {
    title: 'Search Hacker News',
  });
});
