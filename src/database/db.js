const Sequelize = require("sequelize");

const sequelize = new Sequelize(
    "mhribvpz", //database
    "mhribvpz", //user
    "keg_LuwGNGAsVQ80ZE60aEmUyZh4bzUE", //passport
    {
        host:"lallah.db.elephantsql.com",
        dialect:'postgres',
        pool:{
            max:5,
            min:0,
            require:30000,
            idle:10000
        },
        logging:false
    }
)

module.exports = sequelize;