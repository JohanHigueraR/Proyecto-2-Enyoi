function llenar_columna(letra, inicio, fin) {
  for (var a = inicio; a <= fin; a++) {
    $("#ind_letra_" + letra).append(
      '<div class="row" id="dig_' +
        a +
        '"><div class="col-12 digito">' +
        a +
        "</div></div>"
    );
  }
}

$(function () {
  llenar_columna("b", 1, 10);
  llenar_columna("i", 11, 20);
  llenar_columna("n", 21, 30);
  llenar_columna("g", 31, 40);
  llenar_columna("o", 41, 50);
});
var ArrayNumeros = [];

function GenerarAleatorio(maximo) {
  let BtnJugar = document.getElementById("start");
  let aleatorio = Math.floor(Math.random() * maximo) + 1;
  let pantalla = document.getElementById("pantalla");
  let Digito = document.getElementById("dig_" + aleatorio);
  if (ArrayNumeros.length >= maximo) {   
    $('#exampleModal').modal('show'); // abrir
  } else {
    if (!ArrayNumeros.includes(aleatorio)) {
      ArrayNumeros.push(aleatorio);
      if(aleatorio<=10){
        pantalla.textContent = "B-"+aleatorio;
      }
      else if(aleatorio <=20){
        pantalla.textContent = "I-"+aleatorio;
      }
      else if(aleatorio <=30){
        pantalla.textContent = "N-"+aleatorio;
      }
      else if(aleatorio <=40){
        pantalla.textContent = "G-"+aleatorio;
      }
      else{
        pantalla.textContent = "O-"+aleatorio;
      }
      
      Digito.classList.add("marcado");
    } else {
      return GenerarAleatorio(maximo);
    }
  }
}

function ReiniciarBingo() {
  let BtnJugar = document.getElementById("start");
  let pantalla = document.getElementById("pantalla");
  for (i = 1; i <= ArrayNumeros.length; i++) {
    var Digito = document.getElementById("dig_" + i);
    Digito.classList.remove("marcado");
  }
  BtnJugar.removeAttribute("data-bs-toggle", "modal");
  BtnJugar.removeAttribute("data-bs-target", "#exampleModal");
  pantalla.textContent = "";
  ArrayNumeros = [];
}
let BotonInstrucciones= document.getElementById('instrucciones')
  BotonInstrucciones.addEventListener('click',function(){
    $('#ModalInstrucciones').modal('show'); // abrir
  })

