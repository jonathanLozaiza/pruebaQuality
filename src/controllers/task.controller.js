const Task = require('../models/task');
const Project = require("../models/project");

exports.createTasks = async (req, res) => {
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

        const newTasks = await Task.create({
            title,
            task_group_name,
            id_project
        },
        {
            fields:["title","task_group_name","id_project"]
        });

        if(newTasks){
            return res.status(200).json({
                msg:"Tasks created successfully",
                date:newTasks
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

//get Tasks
exports.getTasks = async (req,res) => {
    try{
        const tasks = await Task.findAll({
            order:[
                ['id_task','DESC']
            ]
        })
        res.json({
            data:tasks
        })
    }catch(error){
        console.log(error)
        res.status(500).json({
            msg:"something goes wrong"
        })
    }
}

//get one Tasks
exports.getOneTasks = async (req,res) => {
    const {id} = req.params;
    try{
        const tasks = await Task.findOne({
            where:{
                id_task:id
            }
        });
        res.json({
            tasks
        })
    }catch(error){
        console.log(error);
        res.status(500).json({
            msg:"something goes wrong"
        })
    }
}

//delete a Tasks
exports.deleteTasks= async (req,res) => {
    const {id} = req.params;
    try{
        const deleteRowCount = await Task.destroy({
            where:{
                id_task:id
            }
        })
        res.json({
            msg:"Tasks deleted successfully",
            data: deleteRowCount
        })
    }catch(error){
        console.log(error);
        res.status(500).json({
            msg:"something goes wrong"
        })
    }
}

//update Tasks
exports.updateTasks = async (req,res) => {
    const {id} = req.params;
    const {title,task_group_name,id_project} = req.body;
    try{

        const project = await Project.findOne({
            where:{
                id_project
            }
        })
        if(!project){
            return res.status(404).json({msg:"project not found"});
        }

        let tasks = await Task.findOne({
            where:{
                id_task:id
            }
        });

        if(!tasks){
            return res.status(404).json({
                msg:"Tasks not found"
            })
        }

        tasks = await tasks.update({
            title,
            task_group_name,
            id_project
        });

        res.json({
            msg:"Tasks updated successfully",
            data:tasks
        })

    }catch(error){
        res.status(500).json({
            msg:"something goes wrong"
        })
    }
}

// get tasks for projects
exports.getTasksByProject = async (req,res) => {
    const {id} = req.params;
    try{
        const tasks = await Task.findAll({
            where:{
                id_project : id
            }
        });

        if(!tasks){
            return res.status(500).json({msg:"the project has no associated tasks"});
        }

        res.json({
            data:tasks
        })
    }catch(error){
        console.log(error);
        res.status(500).json({
            msg:"something goes wrong"
        })
    }
}