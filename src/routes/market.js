const express = require("express");
const router = express.Router();
const {createMarket,updateMarket,deleteMarket,getMarkets,getOneMarket} = require("../controllers/market.controller");

//create market
router.post('/', createMarket);

//update market
router.put('/:id',updateMarket);

//delete market
router.delete('/:id',deleteMarket);

//get one market
router.get('/:id',getOneMarket);

//get markets
router.get('/',getMarkets);

module.exports = router