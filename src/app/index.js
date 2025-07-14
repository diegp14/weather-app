const {Clima}= require('./weather');
const {UI} = require('./UI');
const {Store} = require('./store');

const store = new Store();
const {ciudad, codigo}=store.getLocationData()
const clima =new Clima(ciudad, codigo);
const ui = new UI();


require('./index.css');

async function obtenerClima() {
  const data = await clima.getClima();
  console.log(data);
  ui.render(data);    
}
document.getElementById('Bweather').addEventListener('click',(e)=>{
   const ciudad = document.getElementById('city').value;
   const codigo = document.getElementById('countryCode').value;
   clima.changeCiudad(ciudad,codigo);
   store.setLocationData(ciudad, codigo);
   obtenerClima();
   e.preventDefault();
})
document.addEventListener('DOMContentLoaded', obtenerClima);