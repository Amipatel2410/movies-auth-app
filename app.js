const express = require('express');
const path = require('path')
const methodOverride = require('method-override');
const bodyParser = require('body-parser');
const app = express();

const PORT = process.env.PORT || 3000;


app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(methodOverride('_method'));
app.use(bodyParser.urlencoded({ extended: false }));
const moviesRouter = require('./routes/movies-routes');
app.use('/movies', moviesRouter);

app.get('/', (req, res) => {
  res.send('Hello, world!');
});


app.listen(PORT, () => {
  console.log(`App is up and running. Listening on port ${PORT}`);
});
