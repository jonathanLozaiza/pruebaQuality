const express = require("express");
const router = express.Router();
const {createTasks,updateTasks,deleteTasks,getTasks,getOneTasks} = require("../controllers/task.controller");

//create Task
router.post('/', createTasks);

//update Task
router.put('/:id',updateTasks);

//delete Task
router.delete('/:id',deleteTasks);

//get one Task
router.get('/:id',getOneTasks);

//get Tasks
router.get('/',getTasks);

module.exports = router