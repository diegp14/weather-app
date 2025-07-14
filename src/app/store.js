export class Store{

    constructor() {
        this.city;
        this.countryCode;
        this.defaultCity = 'Kiev';
        this.defaultCode = 'ua';

    }
    getLocationData(){
        if(localStorage.getItem('ciudad')===null){
            this.city = this.defaultCity;
            
        }else{
           this. city = localStorage.getItem('ciudad');
           
        }
        if(localStorage.getItem('codigo')===null){
            this.countryCode = this.defaultCode;

        }else{
        this.countryCode = localStorage.getItem('codigo');
        }
        return{
            ciudad: this.city,
            codigo:  this.countryCode
        }
    }
    setLocationData(country, countryCode){
        localStorage.setItem('ciudad', country);
        localStorage.setItem('codigo', countryCode);
    }
}