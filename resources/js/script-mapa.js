//MAPA Leaflet
$(document).ready(function(){
var mymap = L.map('webgismap');

var osmUrl='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
var osmAttrib='Map data © <a href="https://openstreetmap.org">OpenStreetMap</a> contributors';
var osm = new L.TileLayer(osmUrl, {minZoom: 2, maxZoom: 21, attribution: osmAttrib});

mymap.setView(new L.LatLng(-30.034966, -51.238696),14);
mymap.addLayer(osm);

var cidadegeoIcon = L.icon({
    iconUrl: 'resources/img/logo-blue0.png',
    iconSize:     [40, 32],
    iconAnchor:   [15, 32],
    shadowAnchor: [4, 62],
    popupAnchor:  [-3, -76]
});

L.marker([-30.034966, -51.238696], {icon: cidadegeoIcon}).addTo(mymap).bindPopup("Escritório mobCursos");

//Abrir mapa no footer
$('#link-address').click(function(event){
  if ($('#link-address').text() == 'Abrir mapa') {
    $('#webgismap').show("slow");
    $('#link-address').html('<ion-icon name="location" id="location" role="img" class="md hydrated" aria-label="location"></ion-icon>Fechar mapa');
    mymap.invalidateSize();
  } else {
    $('#webgismap').hide("slow");
    $('#link-address').html('<ion-icon name="location" id="location" role="img" class="md hydrated" aria-label="location"></ion-icon>Abrir mapa');
  }
});

});