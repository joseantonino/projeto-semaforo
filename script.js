function contagem(a) {
  var valor = a;
  setInterval(function () {
    if (valor > 0) {
      valor = valor - 1;
      document.querySelector(".cont").innerHTML = valor;
    }
  }, 1000);
}

function red() {
  contagem(10);
  var cor = document.getElementById("red");
  cor.style.backgroundColor = "red";

  setTimeout(function () {
    cor.style.backgroundColor = "rgb(48, 48, 30)";
    green();
  }, 10000);
}

function yellow() {
  contagem(6);
  var cor = document.getElementById("yellow");

  var apagar = setInterval(function () {
    cor.style.backgroundColor = "yellow";
    setTimeout(function () {
      cor.style.backgroundColor = "rgb(48, 48, 30)";
    }, 500);
  }, 1000);

  setTimeout(function () {
    clearInterval(apagar);
    cor.style.backgroundColor = "rgb(48, 48, 30)";
    red();
  }, 5000);
}

function green() {
  contagem(10);
  var cor = document.getElementById("green");
  cor.style.backgroundColor = "rgb(64, 255, 0)";

  setTimeout(function () {
    cor.style.backgroundColor = "rgb(23, 36, 23)";
    yellow();
  }, 10000);
}
green();
