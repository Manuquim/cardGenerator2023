/* eslint-disable */
import "bootstrap";
import "./style.css";

window.onload = function() {
  //Una vez carga la pagina, se genera una carta
  generaCarta();

  //añadimos evento sobre el div "card" para generar nueva carta
  var el = document.getElementById("card");
  el.onclick = generaCarta;

  //genera carta cada 5 segundos
  setInterval(generaCarta, 5000);
};

function generaCarta() {
  document.getElementById("numero").innerHTML = nuevoNumero();

  let palo;
  document.getElementById("top").innerHTML = palo = nuevoPalo();
  document.getElementById("bottom").innerHTML = palo;

  let color = "black";
  if (palo == "&hearts;" || palo == "&diams;") color = "red";
  document.getElementById("top").style.color = color;
  document.getElementById("bottom").style.color = color;
}

function nuevoPalo() {
  let cuatroPalos = ["&spades;", "&hearts;", "&diams;", "&clubs;"];
  return cuatroPalos[generaRandom(0, 3)];
}
function nuevoNumero() {
  let numeroCarta = [
    "As",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K"
  ];

  return numeroCarta[generaRandom(0, 12)];
}

//genera numero aleatorio entero entre los dos valores de argumento
function generaRandom(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
