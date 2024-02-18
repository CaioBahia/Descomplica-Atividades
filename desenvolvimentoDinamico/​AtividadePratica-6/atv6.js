let bebida = prompt("Escolha sua bebida: café, leite ou chá");
let valor;

switch (bebida.toLowerCase()) {
  case "café":
    valor = 5;
    break;
  case "cafe":
    valor = 5;
    break;
  case "leite":
    valor = 2;
    break;
  case "chá":
    valor = 3;
    break;
  case "cha":
    valor = 3;
    break;
  default:
    alert("Escolha inválida. Por favor, escolha entre café, leite ou chá.");
    break;
}

if (valor !== undefined) {
  alert("Você escolheu " + bebida + ". Valor a pagar: R$" + valor.toFixed(2));
}
