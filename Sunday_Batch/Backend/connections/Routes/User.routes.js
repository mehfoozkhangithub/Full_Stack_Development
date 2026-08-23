const express = require('express');

const { formModel } = require('../model/form.model');

const userRoutes = express.Router();

userRoutes.get('/', async (req, res) => {
  const user = await formModel.find();
  res.send(user);
});

userRoutes.post('/created', async (req, res) => {
  console.log(`🚀 ~ req.body:`, req.body);
  const user = new formModel(req.body);
  await user.save();
  res.send('data added....');
});

// update [put/ patch]

userRoutes.put('/update/:userId', async (req, res) => {
  const payload = req.body;
  const id = req.params.userId;
  try {
    const query = await formModel.findByIdAndUpdate({ _id: id }, payload);
    res.send('your data has been updated...');
  } catch (err) {
    console.log(err);
    res.send(err);
  }
});

//delete

module.exports = { userRoutes };
