const User = require("./User");
const Playlist = require("./Playlist");

Playlist.belongsTo(User, {
  foreignKey: 'user_id',
});

// create associations
User.hasMany(Playlist, {
  foreignKey: 'user_id'
});

module.exports = { User, Playlist };