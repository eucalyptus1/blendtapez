const {Model, DataTypes } = require('sequelize');
const sequelize = require('../db/connection');

class Playlist extends Model {}

// create fields/columns for Playlist model
Playlist.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        track_name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate:{
                max: 30
            }
        },
    },
    {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'account'
    }
);

module.exports = Playlist;
