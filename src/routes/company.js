const express = require("express");
const router = express.Router();
const {createCompany,updateCompany,deleteCompany,getCompanys,getOneCompany} = require("../controllers/company.controller");

//create Company
router.post('/', createCompany);

//update Company
router.put('/:id',updateCompany);

//delete Company
router.delete('/:id',deleteCompany);

//get one Company
router.get('/:id',getOneCompany);

//get Companys
router.get('/',getCompanys);

module.exports = router