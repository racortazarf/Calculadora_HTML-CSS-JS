function funcion1() {
  let val1 = document.getElementById("text1");
  val1.value = val1.value + "1";
}

function funcion2() {
  let val1 = document.getElementById("text1");
  val1.value = val1.value + "2";
}
function funcion3() {
  let val1 = document.getElementById("text1");
  val1.value = val1.value + "3";
}
function funcion4() {
  let val1 = document.getElementById("text1");
  val1.value = val1.value + "4";
}
function funcion5() {
  let val1 = document.getElementById("text1");
  val1.value = val1.value + "5";
}
function funcion6() {
  let val1 = document.getElementById("text1");
  val1.value = val1.value + "6";
}
function funcion7() {
  let val1 = document.getElementById("text1");
  val1.value = val1.value + "7";
}
function funcion8() {
  let val1 = document.getElementById("text1");
  val1.value = val1.value + "8";
}
function funcion9() {
  let val1 = document.getElementById("text1");
  val1.value = val1.value + "9";
}
function funcion0() {
  let val1 = document.getElementById("text1");
  val1.value = val1.value + "0";
}
function funcionp() {
  let val1 = document.getElementById("text1");
  val1.value = val1.value + ".";
}

var numero1 = null;
var numero2 = null;

function suma() {
  a();
  var resultado = document.getElementById("resultado");
  resultado.innerHTML = "Resultado:  " + (+numero1.value + +numero2.value);
}
function resta() {
  a();
  var resultado = document.getElementById("resultado");
  resultado.innerHTML = "Resultado: " + (+numero1.value - +numero2.value);
}
function division() {
  a();
  var resultado = document.getElementById("resultado");
  resultado.innerHTML = "Resultado: " + +numero1.value / +numero2.value;
}
function multiplicacion() {
  a();
  var resultado = document.getElementById("resultado");
  resultado.innerHTML = "Resultado: " + +numero1.value * +numero2.value;
}
a = function() {
  numero1 = document.getElementById("text1");
  numero2 = document.getElementById("text2");
};
