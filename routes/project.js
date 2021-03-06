const express = require('express');
const router = express.Router();
const { projects } = require('../data/data.json')


/* GET project page. */
router.get('/:id', (req, res, next) => {
  const projectId = req.params.id;
  const project = projects.find( ({ id }) => id === + projectId );
  if (project) {
    // 2. Pass the project data to the 'project' template
    res.render('project', { project } );
  } else {
    const err = new Error('Not Found');
    err.status = 404;
    console.log('404, page not found')
    next(err);
  }
});

 module.exports = router;
