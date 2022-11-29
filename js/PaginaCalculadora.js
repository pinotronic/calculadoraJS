class paginaCalculadora extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `     
    <div class="cuerpo">
    <div class="calculadora">
        <div class="display">
            <div type="text" id="valor-anterior" value="0" disabled> </div>
            <div type="text" id="valor-actual" value="0" disabled></div>
        </div>
        <button onclick="display.boorarTodo()" class="col-2" id="btn-C">C</button>
        <button onclick="display.borrar()">&larr;</button>
        <button class="numero" id="btn-%">%</button>
        <button class="numero" id="btn-7">7</button>
        <button class="numero" id="btn-8">8</button>
        <button class="numero" id="btn-9">9</button>
        <button class="operador" value="dividir" id="btn-div">/</button>

        <button class="numero" id="btn-4">4</button>
        <button class="numero" id="btn-5">5</button>
        <button class="numero" id="btn-6">6</button>
        <button class="operador" value="multiplicar" id="btn-mult">*</button>

        <button class="numero" id="btn-1">1</button>
        <button class="numero" id="btn-2">2</button>
        <button class="numero" id="btn-3">3</button>
        <button class="operador" value="restar" id="btn-rest">-</button>

        <button class="numero" id="btn-0">0</button>
        <button class="numero" id="btn-punto">.</button>
        <button class="operador" value="igual" id="btn-igual">=</button>
        <button class="operador" value="sumar" id="btn-sum">+</button>
      </div>
    </div>
  </div>`;
  }
}
customElements.define("pagina-calculadora", paginaCalculadora);
