const Sequelize = require("sequelize");
const sequelize = require("../database/db");

const Tarea = sequelize.define('tareas',{
    id_task:{
        type:Sequelize.INTEGER,
        primaryKey:true
    },
    title:{
        type:Sequelize.TEXT
    },
    task_group_name:{
        type:Sequelize.TEXT
    },
    id_project:{
        type:Sequelize.DataTypes.INTEGER
    } 
},{
    timestamps:false
});

module.exports = Tarea;