const textDi = document.querySelector("#ingreso");
const textDs = document.querySelector("#texto-box");

function Decrypt(){
    textDs.textContent = decrypt(textDi.value)
}

function decrypt(text){
    let info = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
    text = text.toLowerCase();
    for(i = 0; i < info.length; i++){
        if(text.includes(info[i][1])){
            text = text.replaceAll(info[i][1],info[i][0])
        }
      }

    return text;
}
