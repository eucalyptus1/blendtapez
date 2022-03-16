
var trackListEl = document.querySelector("#track-list");
var trackButtonEl = document.querySelector("button");
var videoEl = document.querySelector("#video-player");
var formEl = document.querySelector("#form-el");




var addTrack = function(event) {
  event.preventDefault();
  var trackNameInput = document.querySelector("input[name='track-name']").value;
  var trackLinkInput = document.querySelector("input[name='track-link']").value;
  console.log(trackLinkInput);

  getVideo();
};

function getVideo() {
    var trackLinkInput = document.querySelector("input[name='track-link']").value;
    const api = `https://www.youtube.com/oembed?format=json&url=${trackLinkInput}`

    fetch(`${api}`)
    .then(function(response) {
    response.json()
    .then(function(data) {
    console.log(data);
    var vid = data.html;
    console.log(vid);
    videoEl.innerHTML = `${vid}`;
    }) 
  })
};






// jQuery.ajaxPrefilter(function(options) {
//   if (options.crossDomain && jQuery.support.cors) {
//       options.url = 'https://cors-anywhere.herokuapp.com/' + options.url;
//   }
// });


function displayVideo (vid) {
  videoEl.innerHTML = `${vid}`;
};




trackButtonEl.addEventListener("click", addTrack);
