/**
 * @desc Function for instantiating the leaflet map in work.html as well as its
 *				draw feature.
 */
function showMap() {
    $("leafletmap").fadeIn(3000);
    leaflet();
    drawMap();
}

/**
 * @desc Function for instantiating the map in read_only mode of work.html.
 *				No draw feature because it is read only.
 */
function showMapToRead() {
    $("leafletmap").fadeIn(3000);
    leaflet();
}