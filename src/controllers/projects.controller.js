const Projects = require('../models/Project');
const Company = require('../models/company');
const Service = require('../models/service');
const Market = require('../models/market');

exports.createProject = async (req, res) => {
    const {name,description,id_company,id_market,id_service} = req.body;
    try{

        const company = await Company.findOne({
            where:{
                id_company
            }
        })
        if(!company){
            return res.status(404).json({msg:"company not found"});
        }

        const market = await Market.findOne({
            where:{
                id_market
            }
        })
        if(!market){
            return res.status(404).json({msg:"market not found"});
        }

        const service = await Service.findOne({
            where:{
                id_service
            }
        })
        if(!service){
            return res.status(404).json({msg:"service not found"});
        }

        const newProject = await Projects.create({
            name,
            description,
            id_company,
            id_market,
            id_service
        },{
        fields:[
            "name",
            "description",
            "id_company",
            "id_market",
            "id_service"
        ]});

        if(newProject){
            return res.status(200).json({
                msg:"project created successfully",
                date:newProject
            })
        }
    }catch(error){
        console.log(error);
        res.status(500).json({
            msg:"somethig goes wrong",
            data:{}
        })
    }
}

//get projects
exports.getProjects = async (req,res) => {
    try{
        const projects = await Projects.findAll()
        res.json({
            data:projects
        })
    }catch(error){
        res.status(500).json({
            msg:"something goes wrong"
        })
    }
}

//get one project
exports.getOneProject = async (req,res) => {
    const {id} = req.params;
    try{
        const project = await Projects.findOne({
            where:{
                id_project:id
            }
        });
        res.json({
            project
        })
    }catch(error){
        console.log(error);
        res.status(500).json({
            msg:"something goes wrong"
        })
    }
}

//delete a project
exports.deleteProject = async (req,res) => {
    const {id} = req.params;
    try{
        const deleteRowCount = await Projects.destroy({
            where:{
                id_project:id
            }
        })
        res.json({
            msg:"project deleted successfully",
            data: deleteRowCount
        })
    }catch(error){
        console.log(error);
        res.status(500).json({
            msg:"something goes wrong"
        })
    }
}

//update project
exports.updateProject = async (req,res) => {
    const {id} = req.params;
    const {name,description,id_company,id_market,id_service} = req.body;
    try{

        const company = await Company.findOne({
            where:{
                id_company
            }
        })
        if(!company){
            return res.status(404).json({msg:"company not found"});
        }

        const market = await Market.findOne({
            where:{
                id_market
            }
        })
        if(!market){
            return res.status(404).json({msg:"market not found"});
        }

        const service = await Service.findOne({
            where:{
                id_service
            }
        })
        if(!service){
            return res.status(404).json({msg:"service not found"});
        }

        let project = await Projects.findOne({
            where:{
                id_project:id
            }
        });

        if(!project){
            return res.status(404).json({
                msg:"project not found"
            })
        }

        project = await project.update({
            name,
            description,
            id_company,
            id_market,
            id_service
        });

        res.json({
            msg:"project updated successfully",
            data:project
        })

    }catch(error){
        res.status(500).json({
            msg:"something goes wrong"
        })
    }
}