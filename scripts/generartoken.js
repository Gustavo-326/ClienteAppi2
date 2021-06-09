//RUTINA PARA IR A UN SERVIDOR (SPOTIFY Y TRAER DATOS)
//JAVA SCRIPT SE CONECTA ASINC
// 1. Definir la url de conexion

let urlPOST="https://accounts.spotify.com/api/token";

//2. Definir los datos que se envian al servidor post(enviando datos);

let llave1="grant_type=client_credentials";
let llave2="cliente_id=9686f0bf63ad43e6b81ead0b0aa46d51";
let llave3="cliente_secret=82762f578e7d4ee2b6fbd38d52a70e29";

//3.Construir la peticion a enviar
let peticionPOST={
    method:"POST",
    headers:{"Content-Type": 'application/x-www-form-urlencoded'},
    body:llave1+'&'+llave2+'&'+llave3
}

//4. Llamar al servidor
fetch(urlPOST,peticionPOST)
.then(function(respuesta){
    return(respuesta.json())
})
.then(function(datos){

    let token=datos.token_type+""+datos.acces_token;
    console.log()
}) 