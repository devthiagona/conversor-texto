function pM() {
  let texto = document.getElementById("inTexto").value;
  let outSaida = document.getElementById("outSaida");

  function captalizeFirst(str) {
    const subst = str.toLowerCase().replace(/(?:^|\s)\S/g, function (a) {
      return a.toUpperCase();
    });
    return subst;
  }
  outSaida.textContent = captalizeFirst(texto);
}
function converterMaiuscula() {
  let texto = document.getElementById("inTexto").value;
  let caracter = document.getElementById("caracter");
  let outSaida = document.getElementById("outSaida");

  outSaida.textContent = texto.toUpperCase();
}
function converterMinuscula() {
  let texto = document.getElementById("inTexto").value;
  let caracter = document.getElementById("caracter");
  let outSaida = document.getElementById("outSaida");
  outSaida.textContent = texto.toLowerCase();
}
function limpar() {
  let texto = (document.getElementById("inTexto").value = "");
  let caracter = (document.getElementById("caracter").textContent =
    "0 Caracter(s)");
  let palvras = (document.getElementById("palavras").textContent =
    "0 Palavras(s)");
  let outSaida = (document.getElementById("outSaida").textContent = "");
}

const texto = document.querySelector("#inTexto");
const caracter = document.querySelector("#caracter");
const palvras = document.querySelector("#palavras");
const outSaida = document.querySelector("#outSaida");
const primeiraMaiuscula = document.querySelector("#primeiraMaiuscula").value;

texto.addEventListener("input", () => {
  const totalC = texto.value.length;
  caracter.textContent = `${totalC} Caracter(s) `;
});

texto.addEventListener("input", () => {
  const total = texto.value.trim().split(/\s+/);
  const totalPalavras = texto.value.trim() === "" ? 0 : total.length;
  palvras.textContent = `${totalPalavras} Palavra(s)`;
});
