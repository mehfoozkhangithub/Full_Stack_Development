const express = require('express');

const studentRoutes = express.Router();

studentRoutes.get('/', (req, res) => {
  res.send('studens');
});

module.exports = { studentRoutes };
