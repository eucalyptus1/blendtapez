
var trackListEl = document.querySelector("#track-list");
var trackButtonEl = document.querySelector("#add-track");
var videoEl = document.querySelector("#video-player");
var trackNameInput = document.querySelector("#title").value;
var trackLinkInput = document.querySelector("#form").value;
// const video = {};


var addTrackHandler = function(event) {
  event.preventDefault();
  console.dir(trackLinkInput);
  getVideo();
};


function getVideo() {
  var api = `https://cors-anywhere.herokuapp.com/https://www.noembed.com/embed?dataType=json&url=${trackLinkInput}`;
  
  fetch(`${api}`).then(function(response) {
    response.json().then(function(data) {
      console.log(data);
      return data;
    })
    .then(function(response){
      vid = data.html;
    })
    .then(function(){
      displayVideo();
    })
  });
  

    //    .then(response => response.json())
    //    .then(json => {console.log(json)})
    //   .then(function(response){
    //       let data = response.json();
    //       console.log(data);
    //       return data;
    //   })
    //   .then(function(response){
    //   vid = data.html;
    //   })
    //   .then(function(){
    //    displayVideo();
    // });
};

jQuery.ajaxPrefilter(function(options) {
  if (options.crossDomain && jQuery.support.cors) {
      options.url = 'https://cors-anywhere.herokuapp.com/' + options.url;
  }
});


function displayVideo () {
  videoEl.innerHTML = `${vid}`;
  
};

trackButtonEl.addEventListener("click", addTrackHandler);