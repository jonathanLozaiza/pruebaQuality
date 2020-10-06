const express = require("express");
const router = express.Router();
const {createProject, getProjects, getOneProject, deleteProject, updateProject} = require('../controllers/projects.controller');

// /api/projects/
// create project
router.post('/',createProject);
// get projects
router.get('/',getProjects);

// /api/projects/id
// get one Project
router.get('/:id',getOneProject);
// delete one project
router.delete('/:id',deleteProject);
// update project
router.put('/:id',updateProject);

module.exports = router;