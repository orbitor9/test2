function cumbriaClassicCoaches(){
//initializes the map and sets the focus and zoom
var map = L.map('mapid').setView([54.5015, -2.1585],9);

//adds the OpenStreetMap tile to the map
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
{
  maxZoom: 18,
  attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, ' +
    '<a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
    'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
  id: 'mapbox.streets'
}).addTo(map);

//retrieves users location and watches it
var userLocation = map.locate
({
  watch:true,
  maxZoom:16,
  enableHighAccuracy: true
});
var userLat;
var userLng;

// when detects users location, circles it red and shows it on map
var movingCircle = L.circle([0,0], 20,
{color: 'red',
fillColor: '#f03',
fillOpacity: 0.5,
draggable: true }).addTo(map);

function onLocationFound(e)
{
  var radius = e.accuracy / 2;
  userLat = e.latlng.lat;
  userLng = e.latlng.lng;
  movingCircle.setLatLng(e.latlng);
  movingCircle.redraw();
}


map.on('locationfound', onLocationFound);

//error message shown if cannot access to location
function onLocationError(e)
{
  alert("you declined to give access to your location");
}

map.on('locationerror', onLocationError);

//markers and their pop ups
var BusDepotmarker = L.marker([54.4234, -2.40017]).addTo(map);
BusDepotmarker.bindPopup('<b style=" font-size: large; color:#712428;">Cumbria Classic Coaches Bus Depot</b><div><img style="width:100%" src="img/cumbriaclassiccoachesbusdepot.png" alt="image"/></div><a href="http://www.ravenstonedale.org/" target="_blank" style=" font-size: large">More...</a>',
{
  minWidth:250
});

var FatLambmarker = L.marker([54.41625, -2.40329]).addTo(map);
FatLambmarker.bindPopup('<b style=" font-size: large; color:#712428;">Fat Lamb County Inn</b><div><img style="width:100%" src="img/fatlambcountyinn.png" alt="image"/></div><a href="http://www.ravenstonedale.org/" target="_blank" style=" font-size: large">More...</a>',
{
  minWidth:250
});

var TownHeadmarker = L.marker([54.4337, -2.43145]).addTo(map);
TownHeadmarker.bindPopup('<b style=" font-size: large; color:#712428;">Ravenstonedale Town Head</b><div><img style="width:100%" src="img/townhead.jpg" alt="image"/></div><a href="http://www.ravenstonedale.org/" target="_blank" style=" font-size: large">More...</a>',
{
  minWidth:250
});

var Schoolmarker = L.marker([54.43218, -2.42929]).addTo(map);
Schoolmarker.bindPopup('<b style=" font-size: large; color:#712428;">Ravenstonedale School</b><div><img style="width:100%" src="img/school.jpg" alt="image"/></div><a href="http://www.ravenstonedale.org/" target="_blank" style=" font-size: large">More...</a>',
{
  minWidth:250
});

var Stationmarker = L.marker([54.45529, -2.36876]).addTo(map);
Stationmarker.bindPopup('<b style=" font-size: large; color:#712428;">Kirkby Stephen Station</b><div><img style="width:100%" src="img/kirkbystephenstation.jpg" alt="image"/></div><a href="https://www.kirkby-stephen.com/" target="_blank" style=" font-size: large">More...</a>',
{
  minWidth:250
});

var Squaremarker = L.marker([54.47332, -2.34871]).addTo(map);
Squaremarker.bindPopup('<b style=" font-size: large; color:#712428;">Town Square</b><div><img style="width:100%" src="img/kirkbystephentownsquare.jpg" alt="image"/></div><a href="https://www.kirkby-stephen.com/" target="_blank" style=" font-size: large">More...</a>',
{
  minWidth:250
});

var Clockmarker = L.marker([54.52615, -2.31845]).addTo(map);
Clockmarker.bindPopup('<b style=" font-size: large; color:#712428;">Brough Clock</b><div><img style="width:100%" src="img/broughclock.jpg" alt="image"/></div><a href="https://www.visitcumbria.com/evnp/brough/" target="_blank" style=" font-size: large">More...</a>',
{
  minWidth:250
});

var MiddletonInTeesmarker = L.marker([54.62486, -2.08352]).addTo(map);
MiddletonInTeesmarker.bindPopup('<b style=" font-size: large; color:#712428;">Middleton in Teesdale</b><div><img style="width:100%" src="img/middletoninteesdale.png" alt="image"/></div><a href="http://www.middletonplus.org.uk/" target="_blank" style=" font-size: large">More...</a>',
{
  minWidth:250
});

var Egglestonmarker = L.marker([54.60828, -2.00134]).addTo(map);
Egglestonmarker.bindPopup('<b style=" font-size: large; color:#712428;">Eggleston</b><div><img style="width:100%" src="img/eggleston.jpg" alt="image"/></div><a href="https://www.tripadvisor.co.uk/Tourism-g2042553-Eggleston_Barnard_Castle_County_Durham_England-Vacations.html" target="_blank" style=" font-size: large">More...</a>',
{
  minWidth:250
});

var Castlemarker = L.marker([54.54342, -1.92616]).addTo(map);
Castlemarker.bindPopup('<b style=" font-size: large; color:#712428;">Barnard Castle</b><div><img style="width:100%" src="img/barnardcastle.jpg" alt="image"/></div><a href="http://www.english-heritage.org.uk/visit/places/barnard-castle/" target="_blank" style=" font-size: large">More...</a>',
{
  minWidth:250
});

var Museummarker = L.marker([54.54199, -1.916534]).addTo(map);
Museummarker.bindPopup('<b style=" font-size: large; color:#712428;">Bowes Museum</b><div><img style="width:100%" src="img/bowesmuseum.jpg" alt="image"/></div><a href="http://thebowesmuseum.org.uk/" target="_blank" style=" font-size: large">More...</a>',
{
  minWidth:250
});

//Newcastle locations just for testing
var Stadiummarker = L.marker([54.97489, -1.62121]).addTo(map);
Stadiummarker.bindPopup('<b style=" font-size: large; color:#712428;">St James Stadium</b><div><img style="width:100%" src="img/stjamespark.jpg" alt="image"/></div><a href="https://www.nufc.co.uk/stadium" target="_system" style=" font-size: large">More...</a>',
{
  minWidth:250
});

var Monumentmarker = L.marker([54.97388, -1.61319]).addTo(map);
Monumentmarker.bindPopup('<b style=" font-size: large; color:#712428;">Monument</b><div><img style="width:100%" src="img/monument.jpg" alt="image"/></div><a href="https://www.newcastlegateshead.com/city-guides/greys-monument" target="_blank" style=" font-size: large">More...</a>',
{
  minWidth:250
});

var Primarkmarker = L.marker([54.97639, -1.61292]).addTo(map);
Primarkmarker.bindPopup('<b style=" font-size: large; color:#712428;">Primark</b><div><img style="width:100%" src="primark.jpg" alt="image"/></div><a href="https://www.primark.com/en/store/newcastle" target="_blank" style=" font-size: large">More...</a>',
{
  minWidth:250
});

var Chinamarker = L.marker([54.97264, -1.62002]).addTo(map);
Chinamarker.bindPopup('<b style=" font-size: large; color:#712428;">China Town</b><div><img style="width:100%" src="img/chinatown.jpg" alt="image"/></div><a href="https://en.wikipedia.org/wiki/Chinatown,_Newcastle" target="_blank" style=" font-size: large">More...</a>',
{
  minWidth:250
});

//centers the pop-ups when they are clicked/tapped on
map.on('popupopen', function(e) {
    var px = map.project(e.popup._latlng); // find the pixel location on the map where the popup anchor is
    px.y -= e.popup._container.clientHeight/2 // find the height of the popup container, divide by 2, subtract from the Y axis of marker location
    map.panTo(map.unproject(px),{animate: true}); // pan to new center
});

// setting interval to repeat alerts() every 5 seconds
var repeat = window.setInterval(alerts, 15000);

var distance;
var busDepotDistance;
var fatLabDistance;
var townHeadDistance;
var schoolDistance;
var stationDistance;
var squareDistance;
var clockDistance;
var middletonDistance;
var egglestonDistance;
var castleDistance;
var museumDistance;


var stadiumDistance;
var monumentDistance;
var primarkDistance;
var chinaDistance;

//control variables for the alerts
var a = true;
var b = true;
var c = true;
var d = true;
var e = true;
var f = true;
var g = true;
var h = true;
var i = true;
var j = true;
var k = true;
var l = true;
var m = true;
var n = true;
var o = true;
var p = true;

function alerts()
{
//resizes map
   map.invalidateSize();
// Distance between users location and point of interests
distance = getDistanceFromLatLonInM(userLat, userLng, 54.97568, -1.62146);
busDepotDistance = getDistanceFromLatLonInM(userLat, userLng, 54.4234, -2.40017);
fatLabDistance = getDistanceFromLatLonInM(userLat, userLng, 54.41625, -2.40329);
townHeadDistance = getDistanceFromLatLonInM(userLat, userLng, 54.4337, -2.43145);
schoolDistance = getDistanceFromLatLonInM(userLat, userLng, 54.43218, -2.42929);
stationDistance = getDistanceFromLatLonInM(userLat, userLng, 54.45529, -2.36876);
squareDistance = getDistanceFromLatLonInM(userLat, userLng, 54.47332, -2.34871);
clockDistance = getDistanceFromLatLonInM(userLat, userLng, 54.52615, -2.31845);
middletonDistance = getDistanceFromLatLonInM(userLat, userLng, 54.62486, -2.08352);
egglestonDistance = getDistanceFromLatLonInM(userLat, userLng, 54.54342, -1.92616);
castleDistance = getDistanceFromLatLonInM(userLat, userLng, 54.54342, -1.92616);
museumDistance = getDistanceFromLatLonInM(userLat, userLng, 54.54199, -1.916534);


stadiumDistance = getDistanceFromLatLonInM(userLat, userLng, 54.97533, -1.62155);
monumentDistance = getDistanceFromLatLonInM(userLat, userLng, 54.97388, -1.61319);
primarkDistance = getDistanceFromLatLonInM(userLat, userLng, 54.97639, -1.61285);
chinaDistance = getDistanceFromLatLonInM(userLat, userLng, 54.97264, -1.62002);

console.log("distance :"+ distance);


  console.log(userLat);
  console.log(userLng);
//Alerts the user if they are approaching one of the sites.
if (busDepotDistance <= 500 && busDepotDistance >= 100)
{
  while(a==true)
  {
    alert("You are approaching to Cumbria Classis Coaches Bus Depot");
    BusDepotmarker.openPopup();
    a=false;
  }
}
else if (fatLabDistance <= 500 && fatLabDistance >= 100)
{
  while(b==true)
  {
    alert("You are approaching to Fat Lamb Country Inn");
    FatLambmarker.openPopup();
    b=false;
  }
}
else if (townHeadDistance <= 500 && townHeadDistance >= 100)
{
  while(c==true)
  {
    alert("You are approaching to Ravenstonedale Town Head");
    TownHeadmarker.openPopup();
    c=false;
  }
}
else if (schoolDistance <= 500 && schoolDistance >= 100)
{
  while(d==true)
  {
    alert("You are approaching to Ravenstonedale School");
    Schoolmarker.openPopup();
    d=false;
  }
}
else if (stationDistance <= 500 && stationDistance >= 100)
{
  while(e==true)
  {
    alert("You are approaching to Kirkby Stephen Station");
    Stationmarker.openPopup();
    e=false;
  }
}
else if (squareDistance <= 500 && squareDistance >= 100)
{
  while(f==true)
  {
    alert("You are approaching to Town Square");
    Squaremarker.openPopup();
    f=false;
  }
}
else if (clockDistance <= 500 && clockDistance >= 100)
{
  while(g==true)
  {
    alert("You are approaching to Brough Clock");
    Clockmarker.openPopup();
    g=false;
  }
}
else if (middletonDistance <= 500 && middletonDistance >= 100)
{
  while(h==true)
  {
    alert("You are approaching to Brough Clock");
    MiddletonInTeesmarker.openPopup();
    h=false;
  }
}
else if (egglestonDistance <= 500 && egglestonDistance >= 100)
{
  while(i==true)
  {
    alert("You are approaching to Eggleston");
    Egglestonmarker.openPopup();
    i=false;
  }
}
else if (castleDistance <= 500 && castleDistance >= 100)
{
  while(j==true)
  {
    alert("You are approaching to Barnard Castle");
    Castlemarker.openPopup();
    j=false;
  }
}
else if (museumDistance <= 500 && museumDistance >= 100)
{
  while(k==true)
  {
    alert("You are approaching to Bowes Museum");
    Museummarker.openPopup();
    k=false;
  }
}
else if (stadiumDistance <= 500 && stadiumDistance >= 100)
{
  while(l==true)
  {
    alert("You are approaching to St James Stadium");
    Stadiummarker.openPopup();
    l=false;
  }
}
else if (monumentDistance <= 500 && monumentDistance >= 100)
{
  while(m==true)
  {
    alert("You are approaching to the Monument");
    Monumentmarker.openPopup();
    m=false;
  }
}
else if (primarkDistance <= 500 && primarkDistance >= 100)
{
  while(n==true)
  {
    alert("You are approaching to Primark");
    Primarkmarker.openPopup();
    n=false;
  }
}
else if (chinaDistance <= 500 && chinaDistance >= 100)
{
  while(o==true)
  {
    alert("You are approaching to the China Town");
    Chinamarker.openPopup();
    o=false;
  }
}
}


//method for calculating distance between two latitude-longitude points based on Haversine formula
function getDistanceFromLatLonInM(lat1,lon1,lat2,lon2)
{
  var R = 6371; // Radius of the earth in km
  var dLat = deg2rad(lat2-lat1);  // deg2rad below
  var dLon = deg2rad((lon2)-(lon1));
  var a =
  Math.sin(dLat/2) * Math.sin(dLat/2) + Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) * Math.sin(dLon/2) * Math.sin(dLon/2);
  var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
  var d = (R * c)*1000; // Distance in meters
  return d;
}

function deg2rad(deg)
{
  return deg * (Math.PI/180)
}
}
