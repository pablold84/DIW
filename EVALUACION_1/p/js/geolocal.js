var map = new ol.Map({
  target: "map",
  layers: [
    new ol.layer.Tile({
      source: new ol.source.OSM(),
    }),
  ],
  view: new ol.View({
    center: ol.proj.fromLonLat([-5.8569653, 43.3596956]),
    zoom: 16,
  }),
});

//Crear un marcador para añadir al mapa
let marcador = new ol.Feature({
  geometry: new ol.geom.Point(
    ol.proj.fromLonLat([-5.8569653, 43.3596956]) // En dónde se va a ubicar
  ),
});

// Definir el ancho y alto deseados
var anchoDeseado = 25;
var altoDeseado = 25;
// Agregamos icono
marcador.setStyle(
  new ol.style.Style({
    image: new ol.style.Icon({
      src: "../img/map.png",
      scale: [anchoDeseado / 48, altoDeseado / 48], // 48 es el tamaño original de la imagen
    }),
  })
);

// array de marcadores si se necesitarna mas de uno
const marcadores = []; // Array para que se puedan agregar otros más tarde

marcadores.push(marcador); // Agregamos el marcador al array

let capa = new ol.layer.Vector({
  source: new ol.source.Vector({
    features: marcadores, // A la capa le ponemos los marcadores
  }),
});
// Y agregamos la capa al mapa
map.addLayer(capa);
