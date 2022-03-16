const {Model, DataTypes } = require('sequelize');
const sequelize = require('../db/connection');

class Album extends Model {}

// create fields/columns for album model
Album.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        cover_art: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        image_path: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'album',
                key: 'id'
            }
        }
    },
    {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'account'
    }
);


module.exports = Album;
