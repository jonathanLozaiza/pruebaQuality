const Sequelize = require("sequelize");
const sequelize = require("../database/db");
const Project = require("./project");

const Company = sequelize.define("companys",{
    id_company:{
        type:Sequelize.INTEGER,
        primaryKey:true
    },
    name:{
        type:Sequelize.TEXT
    }
},{
    timestamps:false
});

Company.hasMany(Project,{foreinKey:'id_company',sourceKey:'id_company'});
Project.belongsTo(Company,{foreinKey:'id_company',targetId:'id_company'});

module.exports = Company;