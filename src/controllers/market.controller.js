const Market = require("../models/market");

//create market
exports.createMarket = async (req,res) => {
    const {name} = req.body;
    try{
        const newMarket = await Market.create({
            name
        },{fields:[
            "name"
        ]});
        
        if(newMarket){
            res.status(200).json({
                msg:"market created successfully",
                data:newMarket
            })
        }
    }catch(error){
        console.log(error);
        res.status(500).json({msg:error})
    }
}

//update market
exports.updateMarket = async (req,res) => {
    const {id} = req.params;
    const {name} = req.body;
    try{
        let market = await Market.findOne({
            where:{
                id_market:id
            }
        });
        
        if(!market){
            res.status(404).json({
                msg:"market not found",
                data:{}
            })
        }

        market = await market.update({
            name
        });

        res.status(200).json({
            msg:"market updated successfully",
            data:market
        })
    }catch(error){
        console.log(error);
        res.status(500).json({msg:error})
    }
}

//delete a market
exports.deleteMarket = async (req,res) => {
    const {id} = req.params;
    try{
        const deleteRowCount = await Market.destroy({
            where:{
                id_market:id
            }
        })
        res.status(200).json({
            msg:"market deleted successfully",
            data: deleteRowCount
        })
    }catch(error){
        console.log(error);
        res.status(500).json({
            msg:"something goes wrong",
            error
        })
    }
}

//get one market
exports.getOneMarket = async (req,res)=>{
    const {id} = req.params;
    try{
        const market = await Market.findOne({
            where:{
                id_market:id
            }
        });
        res.status(200).json({
            market
        })
    }catch(error){
        console.log(error);
        res.status(500).json({
            msg:"something goes wrong",
            error
        })
    }
}

//get markets
exports.getMarkets = async (req,res)=>{
    try{
        const markets = await Market.findAll({
            order:[
                ['id_market','DESC']
            ]
        })
        res.json({
            data:markets
        })
    }catch(error){
        res.status(500).json({
            msg:"something goes wrong",
            error
        })
    }
}