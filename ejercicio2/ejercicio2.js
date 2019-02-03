let text;
let maxLength = 150;

window.onload = function() {
    text = document.getElementById("myTextArea");
	actualizaInfo();
}

function limita() {
    if(text.value.length >= maxLength) {
        return false;
    }
    return true;
}

function actualizaInfo() {
  let info = document.getElementById("info");

  if(text.value.length >= maxLength ) {
    info.innerHTML = `Has alcanzado el l&iacutemite de ${maxLength} caracteres.`;
  }
  else {
    info.innerHTML = `A&uacuten puedes escribir ${maxLength - text.value.length} caracteres m&aacutes.`;
  }
}