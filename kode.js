let map;
let marker;
let geocoder;
let responseDiv;
let response;
const center= { lat: 19.724371571150346, lng: -98.97133855356842 };

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    zoom: 10,
    center: center, 
    mapTypeControl: false,
  });

  const marker = new google.maps.Marker({
    position: center ,
    map: map
  });

}

function clear() {
  marker.setMap(null);
}

window.initMap = initMap;