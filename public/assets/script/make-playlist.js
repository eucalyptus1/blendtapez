//playlist arrays
// var playlistArr = [];
var playlistIdCounter = 0;
 
var trackArr = [];
var trackIdCounter = 0;

// Input form variables
var trackButtonEl = document.querySelector("#track-submit");
var formEl = document.querySelector("#form-el");
var playlistSubmit = document.querySelector("#playlist-submit");

// Created playlist variables
var playlistEl = document.querySelector("#created-playlist");
var playlistTitle = document.querySelector("#playlist-title");
var trackListEl = document.querySelector("#track-list");
var trackNameEl = document.querySelector("#track-name-el");
var videoEl = document.querySelector("#video-player");

//image variables
var img1 = document.querySelector("#img1");
var img2 = document.querySelector("#img2");
var img3 = document.querySelector("#img3");
var img4 = document.querySelector("#img4");

var playlistFormInput = document.querySelector("input[name='playlist-name']").value;
var trackLinkInput;
const playlistObj = {};


// Register form input for playlist name, track name and link
var addTrack = function(event) {
  event.preventDefault();
  var playlistFormInput = document.querySelector("input[name='playlist-name']").value;
  var trackNameInput = document.querySelector("input[name='track-name']").value;
  var trackLinkInput = document.querySelector("input[name='track-link']").value;
  //console.logs for testing
  console.log(trackNameInput);
  console.log(trackLinkInput);
  console.log(playlistFormInput);

  if (!playlistFormInput) {
    alert("You need to enter a Playlist name");
    return false;
  } else {
    playlistTitle.innerHTML = playlistFormInput;
    // playlistArr.push(playlistFormInput);
  }

  getVideo();
};

// initiate api call to gather data and render it on page
function getVideo() {
  //  var playlistFormInput = document.getElementById("input[name='playlist-name']").value;
   var trackNameInput = document.querySelector("input[name='track-name']").value;
   var trackLinkInput = document.querySelector("input[name='track-link']").value;
   var trackArr = [];
   const api = `https://www.youtube.com/oembed?format=json&maxwidth=400&maxheight=260&url=${trackLinkInput}`

    fetch(`${api}`)
    .then(function(response) {
    response.json()
    .then(function(data) {
    console.log(data);
    //take video embed data
    var vid = data.html;
    videoEl.innerHTML = `${vid}`;
    //take video title data
    var title = data.title;
    if (!trackNameInput) {
    var trackObj = {
      name: `${title}`,
      link: trackLinkInput
    };
    trackArr.push(trackObj);
  } else {
    var trackObj = {
      name: trackNameInput,
      link: trackLinkInput
    };
    trackArr.push(trackObj);
  };
    console.log(trackArr);
    createTrackEl(trackArr, trackObj);
    
    }) 
     document.querySelector("input[name='track-link']").value = "";
     document.querySelector("input[name='track-name']").value = "";
  })
};

// function to append tracks into preview div and create unique properties before submit
function createTrackEl (trackArr, trackObj) {
  var trackNameInput = document.querySelector("input[name='track-name']").value;
  var trackLinkInput = document.querySelector("input[name='track-link']").value;
  var playlistName = document.querySelector("input[name='playlist-name']").value;

  if (!trackNameInput) {
    var track = document.createElement("li");
    var a = document.createElement("a");
    a.textContent = trackObj.name;
    a.setAttribute('href', trackLinkInput);
    a.setAttribute('id', `${trackIdCounter}`);
    a.classList.add('song-title');
    trackIdCounter += 1;
    track.appendChild(a);
    trackListEl.appendChild(track);
    const playlistObj = {playlistName, trackArr};
    console.log(playlistObj);

} else {
  var track = document.createElement("li");
  var a = document.createElement("a");
  a.textContent = trackNameInput;
  a.setAttribute('href', `${link}`);
  a.setAttribute('id', `${trackIdCounter}`);
  a.classList.add('song-title');
  trackIdCounter += 1;
  track.appendChild(a);
  trackListEl.appendChild(track);
  const playlistObj = {playlistFormInput, trackObj};
  console.log(playlistObj);
}
};

// function to submit completed playlist into local storage
const submitPlaylist = event => {
  event.preventDefault();
  // console.log(playlistObj);
  playlistIdCounter += 1;
  
  fetch('api/playlists', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    crossDomain: 'true',
    body: JSON.stringify(playlistObj)
  })
    .then(response => {
      if (response.ok) {
        return response.json();
      }
      alert('Error: ' + response.statusText);
    })
    .then(postResponse => {
      console.log(postResponse);
    });
  
  
  
  // document.querySelector("input[name='track-name']").value = "";
};






playlistSubmit.addEventListener("click", submitPlaylist);
trackButtonEl.addEventListener("click", addTrack);
