const Service = require("../models/service");

//create Service
exports.createService = async (req,res) => {
    const {name} = req.body;
    try{
        const newService = await Service.create({
            name
        },{fields:[
            "name"
        ]});
        
        if(newService){
            res.status(200).json({
                msg:"Service created successfully",
                data:newService
            })
        }
    }catch(error){
        console.log(error);
        res.status(500).json({msg:error})
    }
}

//update Service
exports.updateService = async (req,res) => {
    const {id} = req.params;
    const {name} = req.body;
    try{
        let service = await Service.findOne({
            where:{
                id_service:id
            }
        });
        
        if(!service){
            res.status(404).json({
                msg:"Service not found",
                data:{}
            })
        }

        service = await service.update({
            name
        });

        res.status(200).json({
            msg:"Service updated successfully",
            data:service
        })
    }catch(error){
        console.log(error);
        res.status(500).json({msg:error})
    }
}

//delete a Service
exports.deleteService = async (req,res) => {
    const {id} = req.params;
    try{
        const deleteRowCount = await Service.destroy({
            where:{
                id_service:id
            }
        })
        res.status(200).json({
            msg:"Service deleted successfully",
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

//get one Service
exports.getOneService = async (req,res)=>{
    const {id} = req.params;
    try{
        const service = await Service.findOne({
            where:{
                id_service:id
            }
        });
        res.status(200).json({
            service
        })
    }catch(error){
        console.log(error);
        res.status(500).json({
            msg:"something goes wrong",
            error
        })
    }
}

//get Services
exports.getServices = async (req,res)=>{
    try{
        const services = await Service.findAll({
            order:[
                ['id_service','DESC']
            ]
        })
        res.json({
            data:services
        })
    }catch(error){
        res.status(500).json({
            msg:"something goes wrong",
            error
        })
    }
}