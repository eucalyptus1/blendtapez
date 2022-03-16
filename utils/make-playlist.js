//playlist and track arrays
var playlists = [];
var tracks = [];
var trackAmount = 0;
var playlistAmount = 0;

// Input form variables
var trackButtonEl = document.querySelector("#track-submit");
var formEl = document.querySelector("#form-el");

// Created playlist variables
var playlistEl = document.querySelector("#created-playlist");
var playlistTitle = document.querySelector("#playlist-title");
var trackListEl = document.querySelector("#track-list");
var trackNameEl = document.querySelector("#track-name-el");
var videoEl = document.querySelector("#video-player");

// Register form input for playlist name, track name and link
var addTrack = function(event) {
  event.preventDefault();
  // var playlistForm = document.getElementById("input[name='playlist-name']").value;
  var trackNameInput = document.querySelector("input[name='track-name']").value;
  var trackLinkInput = document.querySelector("input[name='track-link']").value;
  console.log(trackNameInput);
  console.log(trackLinkInput);


  // if (!playlistForm) {
  //   alert("You need to enter a Playlist name");
  //   return false;
  // } else {
  //   playlistTitle.innerHTML = playlistForm;
  // }

  // document.querySelector("input[name='track-link']").value = "";
  // document.querySelector("input[name='track-name']").value = "";



  getVideo();
};

// initiate api call to gather data and render it on page
function getVideo() {
  //  var playlistForm = document.getElementById("input[name='playlist-name']").value;
   var trackNameInput = document.querySelector("input[name='track-name']").value;
   var trackLinkInput = document.querySelector("input[name='track-link']").value;
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
    var link = data.author_url;
    if (!trackNameInput) {
        var track = document.createElement("li");
        track.setAttribute("track-id", trackAmount);
        track.setAttribute('href', `${link}`);
        track.innerHTML = `${title}`;
        trackListEl.appendChild(track);
    } else {
      trackNameEl.innerHTML = trackNameInput;
      track.setAttribute("track-id", trackAmount);
      track.setAttribute('href', `${link}`);
      trackListEl.appendChild(track);
    }
    }) 
    
  })
};






// jQuery.ajaxPrefilter(function(options) {
//   if (options.crossDomain && jQuery.support.cors) {
//       options.url = 'https://cors-anywhere.herokuapp.com/' + options.url;
//   }
// });




trackButtonEl.addEventListener("click", addTrack);
