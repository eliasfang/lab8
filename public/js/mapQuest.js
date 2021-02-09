function initMap() {
	L.mapquest.key = 'gwqQxGuVnX1uzjlAJSjIo79zpetAjFYT';

	// 'map' refers to a <div> element with the ID map
	var map = L.mapquest.map('map', {
	  center: [32.878737, -117.235832],
	  layers: L.mapquest.tileLayer('map'),
	  zoom: 12,
	  zoomControl: false
	});

	// Add a marker to the map
	L.marker([32.878737, -117.235832]).addTo(map);
}