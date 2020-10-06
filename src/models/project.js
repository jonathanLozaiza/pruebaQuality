const Sequelize = require("sequelize");
const sequelize = require("../database/db");
const Task = require("./task");

const Project = sequelize.define("projects",{
    id_project:{
        type:Sequelize.INTEGER,
        primaryKey:true
    },
    id_company:{
        type:Sequelize.INTEGER
    },
    id_market:{
        type:Sequelize.INTEGER
    },
    id_service:{
        type:Sequelize.INTEGER
    },
    name:{
        type:Sequelize.TEXT
    },
    description:{
        type:Sequelize.TEXT
    }
},{
    timestamps:false
});

Project.hasMany(Task,{foreinKey:'id_project',sourceKey:'id_project'});
Task.belongsTo(Project,{foreinKey:'id_project',targetId:'id_project'});

module.exports = Project;