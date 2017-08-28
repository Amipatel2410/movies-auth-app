const express = require('express');
const path = require('path')
const app = express();

const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Hello, world!');
});

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));


const moviesRouter = require('./routes/movies-routes');
app.use('/movies', moviesRouter);

app.listen(PORT, () => {
  console.log(`App is up and running. Listening on port ${PORT}`);
});
