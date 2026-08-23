const express = require('express');

const {
  todoSet,
  todoGet,
  todoDelete,
  todoReplace,
  todoUpdate,
} = require('../controller/Todo.controller');

const TodoRoutes = express.Router();

/* 
get -> "/todo/"

post -> "/todo/create"

 */

TodoRoutes.get('/', todoGet);
TodoRoutes.post('/create', todoSet);
TodoRoutes.delete('/delete/:id', todoDelete);
TodoRoutes.patch('/update/:id', todoUpdate);
TodoRoutes.put('/replace/:id', todoReplace);

module.exports = { TodoRoutes };
