function Calculator() {

  this.display = document.querySelector('.display');

  this.inicia = () => {
    this.captureClick();
    this.pressBackSpace();
    this.pressEnter();
  };

  // Realizar a função do backSpace
  this.pressBackSpace = () => {
    this.display.addEventListener('keydown', e => {
      if (e.keyCode === 8) {
        e.preventDefault();
        this.del();
      }
    });
  };

  // Realizar a função do enter
  this.pressEnter = () => {
    this.display.addEventListener('keyup', e => {
      if (e.keyCode === 13) {
        this.realizeCount();
      }
    });
  };

  this.captureClick = () => {
    document.addEventListener('click', e => {
      const el = e.target;

      if (el.classList.contains('btn-num')) this.addNum(el);
      if (el.classList.contains('btn-clear')) this.clear();
      if (el.classList.contains('btn-del')) this.del();
      if (el.classList.contains('btn-eq')) this.realizeCount();
    });
  };

  // realizar a conta
  this.realizeCount = () => {
    try {
      const conta = eval(this.display.value);

      if (!conta) {
        alert('Conta inválida!');
        return;
      }

      this.display.value = conta;
    } catch (e) {
      alert('Conta inválida!');
      return;
    }
  };

  // Escrever
  this.addNum = el => {
    this.display.value += el.innerText;
    this.display.focus();
  };

  // Limpar tudo
  this.clear = () => this.display.value = '';

  // Apagar um dado
  this.del = () => this.display.value = this.display.value.slice(0, -1);
}

const calculator = new Calculator();
calculator.inicia();
