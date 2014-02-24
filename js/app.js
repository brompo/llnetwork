 
  var map = L.map('map').setView([-6.17308, 35.74191], 6);

  //var map = L.map('map').setView([37.8, -96], 4);
   L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
  }).addTo(map);

  