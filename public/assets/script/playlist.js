const getPlaylist = (formData = {}) => {
  let queryUrl = '/api/playlists?';

//   Object.entries(formData).forEach(([key, value]) => {
//     queryUrl += `${key}=${value}&`;
//   });

//   console.log(queryUrl);
// };