const express = require('express');
const router = express.Router();
// const { projects } = require('../data/data.json');
//
// /* GET home page. */
// router.get('/', function(req, res, next) {
//   // 1. Pass all project data to 'index' template
//   res.render('index', { projects } );
//   next();
//   console.log(projects);
// });
//
// /* GET project page. */
// router.get('/projects/:id', function(req, res, next) {
//   const projectId = req.params.id;
//   const project = projects.find( ({ id }) => id === +projectId );
//
//   if (project) {
//     // 2. Pass the prject data to the 'project' template
//     res.render('project', { project } );
//   } else {
//     res.sendStatus(404);
//   }
//   next();
// });
//


router.get('/', (req, res) => {
  // 1. Pass all project data to 'index' template
  res.render('index');
});

router.get('/about', (req, res) => {
  res.render('about')
});

router.get('/project', (req, res) => {
  res.render('project')
});

module.exports = router;
