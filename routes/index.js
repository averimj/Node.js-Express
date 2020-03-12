const express = require('express');
const router = express.Router();
const { projects } = require('../data/data.json');

router.get('/', (req, res) => {

  // 1. Pass all project data to 'index' template
  res.render('index', { projects } );
});

module.exports = router;
