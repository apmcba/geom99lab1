function initMap() {
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 5,
    center: { lat: 50.024, lng: -85.887 },
  });
  const citymap: Record<string, city> = {
  bruce: {
    center: { lat: 44.325278, lng: -81.599444 },
    blast: 16,
  },
  darlington: {
    center: { lat: 43.872778, lng: -78.719722 },
    blast: 16,
  },
  pickering: {
    center: { lat: 43.811667, lng: -79.065833 },
    blast: 16,
  },
  point_lepreau: {
    center: { lat: 45.068889, lng: -66.454722 },
    blast: 16,
  }
    for (const city in citymap) {
    const cityCircle = new google.maps.Circle({
      strokeColor: "#FF0000",
      strokeOpacity: 0.8,
      strokeWeight: 2,
      fillColor: "#FF0000",
      fillOpacity: 0.35,
      map,
      center: citymap[city].center,
      radius: Math.sqrt(citymap[city].population) * 100,
    });
    imagePath:
      "https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m",
  });
}
