      let map;

      async function initMap() {
      const { Map } = await google.maps.importLibrary("maps");
        
        map = new google.maps.Map(document.getElementById("map"), {
          center: { lat: 50.024, lng: -85.887 },
          zoom: 5,
          mapTypeId: "terrain"
        });
      }
