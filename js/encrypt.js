const textI = document.querySelector("#ingreso");
const textS = document.querySelector("#texto-box");

function Encrypt(){
    textS.textContent = encrypt(textI.value)
}

function encrypt(text){
    let info = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
    text = text.toLowerCase();
    for(i = 0; i < info.length; i++){
        if(text.includes(info[i][0])){
            text = text.replaceAll(info[i][0],info[i][1])
        }
      }

    return text;
}
