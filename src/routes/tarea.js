const express = require("express");
const router = express.Router();
const {createTareas} = require("../controllers/tareas.controller");

//create Task
router.post('/', createTareas);

module.exports = router