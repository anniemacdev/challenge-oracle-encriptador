const inputText = document.getElementById('input-text');
const outputText = document.getElementById('output-text');
const message = document.querySelector('.message');
const tooltip = document.querySelector('.tooltip');

function btnEncriptar() {
  const textoEncriptado = encriptar(inputText.value);
  inputText.value = "";
  outputText.value = textoEncriptado;
  outputText.style.backgroundImage = "none";
  message.style.display = "none";
  tooltip.style.display = "block";
}


function encriptar(stringEncriptada) {
  let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o","ober"], ["u", "ufat"]];
  stringEncriptada = stringEncriptada.toString().toLowerCase();

  for(let i = 0; i < matrizCodigo.length; i++) {
    if(stringEncriptada.includes(matrizCodigo[i][0])){
      stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0],matrizCodigo[i][1]);
    }
  }
  return stringEncriptada;
}


function btnDesencriptar() {
  const textoDesencriptado = desencriptar(outputText.value);
  outputText.value = "";
  inputText.value = textoDesencriptado;
  outputText.style.backgroundImage = "url('img/person.png')";
  message.style.display = "block";
  tooltip.style.display = "none";
}


function desencriptar(stringDesencriptada) {
  let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o","ober"], ["u", "ufat"]];
  stringDesencriptada = stringDesencriptada.toString().toLowerCase();

  for(let i = 0; i < matrizCodigo.length; i++) {
    if(stringDesencriptada.includes(matrizCodigo[i][1])){
      stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][1],matrizCodigo[i][0]);
    }
  }
  return stringDesencriptada;
}

function btnCopiar() {
  /* Get the text field */
  var copyText = document.getElementById("output-text");

  /* Select the text field */
  copyText.select();
  copyText.setSelectionRange(0, 99999); /* For mobile devices */

   /* Copy the text inside the text field */
  navigator.clipboard.writeText(copyText.value);

  /* Display copied text in a tooltip */
  var tooltip = document.getElementById("myTooltip");
  tooltip.innerHTML = "¡Copiado!";
}

/* function displayClipboardText() {
  var copyText = document.getElementById("output-text");
  copyText.select();
  copyText.setSelectionRange(0, 99999);
  navigator.clipboard.writeText(copyText.value);
  
  var tooltip = document.getElementById("myTooltip");
  tooltip.innerHTML = "Copied: " + copyText.value;
} */

function outFunc() {
  var tooltip = document.getElementById("myTooltip");
  tooltip.innerHTML = "Copiar texto";
}