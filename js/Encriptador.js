var Encriptarb = document.querySelector("#encriptar-b");

Encriptarb.addEventListener("click",function(event){
    event.preventDefault();

    var textor = document.querySelector("#ingreso");
    var datos = textor.value;
    
    document.getElementById("texto-box").textContent= encriptar(datos);

});

function encriptar(datos){
    var Encriptado = "";
    for(i = 0; i < datos.length; i++){
        switch(datos[i]) {
        case "e":
            var Encriptado = Encriptado + "enter";
          break;
        case "i":
            var Encriptado = Encriptado + "imes";
          break;
        case "a":
            var Encriptado = Encriptado + "ai";
            break;
        case "o":
            var Encriptado = Encriptado + "ober";
            break;
        case "u":
            var Encriptado = Encriptado + "ufat";
            break;    
        default:
            var Encriptado = Encriptado + datos[i];
          break;
      }
    }
    return Encriptado;
}
