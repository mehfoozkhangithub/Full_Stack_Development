const { TodoModel } = require('../model/Todo.model');

const todoGet = async (req, res) => {
  const dataTodo = await TodoModel.find();
  res.send(dataTodo);
};

const todoSet = async (req, res) => {
  console.log(req.body);

  try {
    if (req.body) {
      const set = new TodoModel(req.body);
      await set.save();
      res.send('got the data');
    } else {
      res.send('body empty');
    }
  } catch (err) {
    console.log(err);
    res.send(err);
  }
};

// PATCH
const todoUpdate = async (req, res) => {
  try {
    // 1. Get ID from URL
    const { id } = req.params;

    // 2. Update MongoDB document
    const updateTodo = await TodoModel.findByIdAndUpdate(id, req.body);

    // 3. Check if ID exists
    if (!updateTodo) {
      return res.status(404).send({
        message: 'Todo not found',
      });
    }

    // 4. Send updated document
    res.status(200).send({
      message: 'Todo updated successfully',
      data: updateTodo,
    });
  } catch (error) {
    console.log(error);

    res.status(500).send({
      message: 'Server error',
      error: error.message,
    });
  }
};

// Replace || PUT
const todoReplace = async (req, res) => {
  try {
    // 1. Get ID from URL
    const { id } = req.params;

    // 2. Update MongoDB document
    const replaceTodo = await TodoModel.findOneAndReplace(
      { _id: id },
      req.body,
    );

    // 3. Check if ID exists
    if (!replaceTodo) {
      return res.status(404).send({
        message: 'Todo not found',
      });
    }

    // 4. Send updated document
    res.status(200).send({
      message: 'Todo replaced successfully',
      data: replaceTodo,
    });
  } catch (error) {
    console.log(error);

    res.status(500).send({
      message: 'Server error',
      error: error.message,
    });
  }
};

//Delete

const todoDelete = async (req, res) => {
  try {
    const { id } = req.params;

    const deleteTodo = await TodoModel.findByIdAndDelete(id);

    if (!deleteTodo) {
      return res.status(404).send({
        message: 'todo not found',
      });
    }
    res.status(200).send({
      message: 'Todo deleted successfully',
      data: deletedTodo,
    });
  } catch (err) {
    console.log(error);
    res.status(500).send({
      message: 'server error',
      error: error.message,
    });
  }
};

/* 
put all object change
patch single element of obkect change 
delete the single object
*/

module.exports = { todoSet, todoGet, todoDelete, todoReplace, todoUpdate };
