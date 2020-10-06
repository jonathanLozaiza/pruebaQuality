const express = require("express");
const router = express.Router();
const {createService,updateService,deleteService,getServices,getOneService} = require("../controllers/service.controller");

//create Service
router.post('/', createService);

//update Service
router.put('/:id',updateService);

//delete Service
router.delete('/:id',deleteService);

//get one Service
router.get('/:id',getOneService);

//get Services
router.get('/',getServices);

module.exports = router