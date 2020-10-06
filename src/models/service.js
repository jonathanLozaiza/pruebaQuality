const Sequelize = require("sequelize");
const sequelize = require("../database/db");
const Project = require("./project");

const Service = sequelize.define("services",{
    id_service:{
        type:Sequelize.INTEGER,
        primaryKey:true
    },
    name:{
        type:Sequelize.TEXT
    }
},{
    timestamps:false
})

Service.hasMany(Project,{foreinKey:'id_service',sourceKey:'id_service'});
Project.belongsTo(Service,{foreinKey:'id_service',targetId:'id_service'});

module.exports = Service;