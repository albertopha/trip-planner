const mapbox = require("mapbox-gl");

const iconURLs = {
    activities: "url(http://i.imgur.com/WbMOfMl.png)",
    hotels: "url(http://i.imgur.com/D9574Cu.png)",
    restaurants: "url(http://i.imgur.com/cqR6pUI.png)",
};

const buildMarker = (type, coords) => {
  const markerDomEl = document.createElement("div");
  markerDomEl.style.width = "32px";
  markerDomEl.style.height = "39px";
  if (type === 'activity') markerDomEl.style.backgroundImage = iconURLs.activities;
  if (type === 'hotel') markerDomEl.style.backgroundImage = iconURLs.hotels;
  if (type === 'restaurant') markerDomEl.style.backgroundImage = iconURLs.restaurants;
  return new mapbox.Marker(markerDomEl).setLngLat(coords);
};

module.exports = buildMarker;
