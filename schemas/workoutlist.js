let Sequelize = require('sequelize');


var config = require('../config.json');

//let { host, user, password, database } = config;

const sequelize = new Sequelize(config.dbname, config.dbuser, config.dbpassword, {
    host: config.dbhost,
    dialect: 'mysql',
    operatorsAliases: false,
});


let WorkoutModel = sequelize.define('workoutlist', {
    workout_id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    short_name: Sequelize.STRING,
    long_name: Sequelize.STRING,
    type: Sequelize.STRING,
    delivery_type: Sequelize.STRING,
}, {
        timestamps: false,
        freezeTableName: true,
        tableName: 'workoutlist'
    });


module.exports = { WorkoutModel };