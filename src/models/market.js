const Sequelize = require("sequelize");
const sequelize = require("../database/db");
const Project = require("./project");

const Market = sequelize.define("markets",{
    id_market:{
        type:Sequelize.INTEGER,
        primaryKey:true
    },
    name:{
        type:Sequelize.TEXT
    }
},{
    timestamps:false
});

Market.hasMany(Project,{foreinKey:'id_market',sourceKey:'id_market'});
Project.belongsTo(Market,{foreinKey:'id_market',targetId:'id_market'});

module.exports = Market;