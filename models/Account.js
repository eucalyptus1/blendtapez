const {Model, DataTypes } = require('sequelize');
const sequelize = require('../db/connection');

class Account extends Model {}

// create fields/columns for Account model
Account.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        playlist: {
            type: DataTypes.STRING,
            allowNull: false,
            validate:{
                max: 20
            }
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

module.exports = Account;
