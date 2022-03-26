const getPlaylist = (formData = {}) => {
  let queryUrl = '/api/playlist?';

  Object.entries(formData).forEach(([key, value]) => {
    queryUrl += `${key}=${value}&`;
  });

  console.log(queryUrl);

  fetch(queryUrl)
  .then(response => {
    if (!response.ok) {
      return alert('Error: ' + response.statusText);
    }
    return response.json();
  })
  .then(playlistData => {
    console.log(playlistData);
    printResults(playlistData);
  });
};