const Tarea = require('../models/tarea');
const Project = require("../models/project");

exports.createTareas = async (req, res) => {
    const {title,task_group_name,id_project} = req.body;
    const projectIdProject = 0
    try{

        //const project = await Project.findOne({
           // where:{
               // id_project
           // }
        //})
       // if(!project){
         //   return res.status(404).json({msg:"project not found"});
        //}

        const newTareas = await Tarea.create({
            title,
            task_group_name,
            id_project
        },
        {
            fields:["title","task_group_name","id_project"]
        });

        if(newTareas){
            return res.status(200).json({
                msg:"Tareas created successfully",
                date:newTareas
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
