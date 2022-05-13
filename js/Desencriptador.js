var DesencriptarB = document.querySelector("#desencriptar-b");

DesencriptarB.addEventListener("click",function(event){
    event.preventDefault();

    var textor = document.querySelector("#ingreso");
    var datos = textor.value;

    document.getElementById("texto-box").textContent= desencriptar(datos);

});

function desencriptar(d){
    var Desencriptar = "";
    for(i = 0; i < d.length; i++){
        switch(d[i]) {
        case "e":
            var V = d[i] + d[i+1] + d[i+2] + d[i+3] + d[i+4];
            if(V == "enter"){
                var Desencriptar = Desencriptar + "e";
                i = i + 4;
                break;
            } else{var Desencriptar = Desencriptar + d[i];} 
          break;
        case "i":
            var V = d[i] + d[i+1] + d[i+2] + d[i+3];
            if(V == "imes"){
                var Desencriptar = Desencriptar + "i";
                i = i + 3;
                break;
            } else{var Desencriptar = Desencriptar + d[i];} 
          break;
        case "a":
            var V = d[i] + d[i+1];
            if(V == "ai"){
                var Desencriptar = Desencriptar + "a";
                i = i + 1;
                break;
            } else{var Desencriptar = Desencriptar + d[i];} 
            break;
        case "o":
            var V = d[i] + d[i+1] + d[i+2] + d[i+3];
            if(V == "ober"){
                var Desencriptar = Desencriptar + "o";
                i = i + 3;
                break;
            } else{var Desencriptar = Desencriptar + d[i];} 
            break;
        case "u":
            var V = d[i] + d[i+1] + d[i+2] + d[i+3];
            if(V == "ufat"){
                var Desencriptar = Desencriptar + "u";
                i = i + 3;
                break;
            } else{var Desencriptar = Desencriptar + d[i];} 
            break;    
        default:
            var Desencriptar = Desencriptar + d[i];
          break;
      }
    }
    return Desencriptar;
}
//La letra "e" es convertida para "enter"
//La letra "i" es convertida para "imes"
//La letra "a" es convertida para "ai"
//La letra "o" es convertida para "ober"
//La letra "u" es convertida para "ufat"