//variables guardan elemento por id
var cities = document.getElementById('cities');
var city = document.getElementById('city');
var temp = document.getElementById('temp');
var wet = document.getElementById('wet');

const apiKey = '35464338a7b75681a45def9eb718c020';

// agregamos un listener a cities por si cambia el selector
cities.addEventListener('change', function(){
    option = this.value;
    url = 'https://api.openweathermap.org/data/2.5/weather?lang=es&units=metric&q='+ option +'&appid='+ apiKey;

// apendizar para que no se junten en la vista del cliente
city.textContent = "Ciudad: ";

temp.textContent= "Temperatura ";

wet.textContent= "Humedad: ";


// instancia XMLHttpRequest()
let request = new XMLHttpRequest();
// obtenemos datos con get y true para que sea asincrona
    request.open('GET', url, true);
// para que nos devuelva un json    
    request.responseType = 'json';
// ejecuta al final de la carga del documento
    request.onload = function(){
        // segun el codigo de status nos devuelvel el resultado o error
        if(this.status == 200){
            // alamcenamos el json en tiempoResultado
            tiempoResultado = request.response;
            city.append(tiempoResultado['name']);
            temp.append(tiempoResultado['main'].temp + " °C");
            wet.append(tiempoResultado['main'].humidity + " %");
            }else{
            // si falla que nos devuelva el status
                alert(this.status); 
            }
    }
    // porque no vamos a enviarle nada null
        request.send(null);
});

