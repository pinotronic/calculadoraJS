const displayValorAnterior = document.getElementById("valor-anterior");
const displayValorActual = document.getElementById("valor-actual");
const botonesNumeros = document.querySelectorAll(".numero");
const botonesOperadores = document.querySelectorAll(".operador");

class Calculadora {
  sumar(num1, num2) {
    return num1 + num2;
  }
  restar(num1, num2) {
    return num1 - num2;
  }
  multiplicar(num1, num2) {
    return num1 * num2;
  }
  dividir(num1, num2) {
    return num1 / num2;
  }
}

class Display {
  constructor(displayValorAnterior, displayValorActual) {
    this.displayValorAnterior = displayValorAnterior;
    this.displayValorActual = displayValorActual;
    this.calculadora = new Calculadora();
    this.valorActual = "";
    this.valorAnterior = "";
    this.operacion = undefined;
    this.signos = { sumar: "+", restar: "-", multiplicar: "*", dividir: "/" };
  }

  borrar() {
    this.valorActual = this.valorActual.toString().slice(0, -1);
    this.imprimirValores();
  }

  boorarTodo() {
    this.valorActual = "";
    this.valorAnterior = "";
    this.operacion = undefined;
    this.imprimirValores();
  }

  agregarNumero(numero) {
    if (numero == "." && this.valorActual.includes(".")) return; // checamos si hay algun punto
    this.valorActual = this.valorActual.toString() + numero.toString();
    this.imprimirValores();
  }

  imprimirValores() {
    this.displayValorActual.textContent = this.valorActual;
    this.displayValorAnterior.textContent = `${this.valorAnterior} ${
      this.signos[this.operacion] || ""
    }`;
  }

  computar(tipo) {
    this.operacion !== "igual" && this.calcular();
    this.operacion = tipo;
    this.valorAnterior = this.valorActual || this.valorAnterior;
    this.valorActual = "";
    this.imprimirValores();
  }

  calcular() {
    const valorAnterior = parseFloat(this.valorAnterior);
    const valorActual = parseFloat(this.valorActual);
    if (isNaN(valorActual) || isNaN(valorAnterior)) return;
    this.valorActual = this.calculadora[this.operacion](
      valorAnterior,
      valorActual
    );
  }
}

const display = new Display(displayValorAnterior, displayValorActual);

botonesNumeros.forEach((boton) => {
  boton.addEventListener("click", () => {
    display.agregarNumero(boton.innerHTML);
  });
});

botonesOperadores.forEach((boton) => {
  boton.addEventListener("click", () => {
    display.computar(boton.value);
  });
});
