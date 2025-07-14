

export class Clima{

    constructor(ciudad, codigo){
        this.apiKey = process.env.API_KEY;
        this.ciudad = ciudad;
        this.codigo = codigo;

    }
    async getClima(){
        const URI = `https://api.openweathermap.org/data/2.5/weather?q=${this.ciudad},${this.codigo}
        &appid=${this.apiKey}&units=metric`;
        const respuesta = await fetch(URI);
        const data = await respuesta.json();

        return data;
    }
    changeCiudad(ciudad, codigo){
        this.ciudad = ciudad;
        this.codigo = codigo;
    }

}