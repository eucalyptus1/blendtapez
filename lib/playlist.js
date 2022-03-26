
const fs = require("fs");
const path = require("path");

function findById(id, playlistArray) {
    const result = playlistArray.filter(playlist => playlist.id === id)[0];
    return result;
}


function createNewPlaylist(body, playlistsArray) {
    const playlist = body;
    playlistsArray.push(playlist);
    fs.writeFileSync(
      path.join(__dirname, '../data/playlists.json'),
      JSON.stringify({ playlists: playlistsArray }, null, 2)
    );
  
    return playlist;
}

function validatePlaylist(playlist) {
    if (!playlist.name || typeof playlist.name !== 'string') {
      return false;
    }
    if (!playlist.link || typeof playlist.link !== 'string') {
      return false;
    }
    // if (!animal.personalityTraits || !Array.isArray(animal.personalityTraits)) {
    //     return false;
    //   }
  
    return true;
}

module.exports = {
    findById,
    createNewPlaylist,
    validatePlaylist
  };