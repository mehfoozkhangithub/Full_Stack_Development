const express = require('express');

const trainerRoutes = express.Router();

trainerRoutes.get('/', (req, res) => {
  res.send('trainer');
});

module.exports = { trainerRoutes };
