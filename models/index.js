const User = require("./User");
const Playlist = require("./Playlist");

// create associations
User.hasMany(Playlist, {
  foreignKey: 'user_id'
});

Playlist.belongsTo(User, {
  foreignKey: 'user_id',
});

module.exports = { User, Playlist };