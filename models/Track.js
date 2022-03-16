const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Track extends Model { }

Track.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    track_name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    track_url: {
      type: DataTypes.STRING,
      allowNull: false
    },
    playlist_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'playlist',
        key: 'id'
      }
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'track'
  }
);

module.exports = Track;