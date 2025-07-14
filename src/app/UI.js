//MANIPULAR EL DOM
export class UI {

    constructor(){
       this.location= document.getElementById('weather-location');
       this.description = document.getElementById('weather-description');
       this.string = document.getElementById('weather-string');
       this.humidity = document.getElementById('weather-humidity');
       this.wind = document.getElementById('weather-wind');

    }
    render(datosClima){
        this.location.textContent = datosClima.name + ' / ' + datosClima.sys.country;
        this.description.textContent = datosClima.weather[0].description;
        this.string.textContent = datosClima.main.temp+' °C';
        this.humidity.textContent = 'Humidity: '+datosClima.main.humidity+' %';
        this.wind.textContent = 'Wind: '+ datosClima.wind.speed+ ' m/s';
    }
}