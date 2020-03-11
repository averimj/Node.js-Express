// creates a server
const express = require('express');

// creates a new application
const app = express();

// tells express which template engine to use
app.set('view engine', 'pug');

const mainRoutes = require('./routes');
const aboutRoutes = require('./routes/about');
const projectRoutes = require('./routes/project');


app.use(mainRoutes);
app.use('/about', aboutRoutes);
app.use('/project', projectRoutes);

app.use('/static', express.static('public') );

app.use((req, res, next) => {
  console.log('Hello');
  const err = new Error('Oh no!');
  err.status = 500;
  next(err);
})

app.use((req, res, next) => {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
})

app.use((err, req, res, next) => {
  res.locals.error = err;
  res.status(err.status);
  res.render('error');
})

// tells server to run on users local machine
app.listen(3000, () => {
  console.log('The application is running on localhost:3000');
});
