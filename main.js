import './style.css'

const complimento = document.getElementById("complimento")

fetch("https://data.nasa.gov/resource/gh4g-9sfh.json")
  .then(r => r.json())
  .then(body =>{
    //const compliment=body.complimet
    /*const{complimet}=body
    console.log(complimet)*/
    
    //const {compliment : pippo} = body
    console.log(body)
    const a=body
    //complimento.innerText =JSON.stringify(a[2].geolocation)
    for(let i=0;i<a.length;i++){
      L.marker([a[i].geolocation.latitude,a[i].geolocation.longitude]).addTo(map).bindPopup(JSON.stringify(a[i].geolocation))
    }
  })
const map = L.map('map').setView([51.505, -0.09], 13);
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);
const marker = L.marker([51.5, -0.09]).addTo(map);
marker.bindPopup("ciao")