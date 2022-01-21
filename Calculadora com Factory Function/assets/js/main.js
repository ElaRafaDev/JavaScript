function createCalculator() {
  return {
    display: document.querySelector('.display'),

    // Iniciar a calculadora
    inicia() {
      this.captureClick();
      this.pressBackSpace();
      this.pressEnter();
    },
  
    // Realizar a função do backSpace
    pressBackSpace() {
      this.display.addEventListener('keydown', e => {
        if (e.keyCode === 8) {
          e.preventDefault();
          this.del();
        }
      });
    },

    // Realizar a função do enter
    pressEnter() {
      this.display.addEventListener('keyup', e => {
        if (e.keyCode === 13) {
          this.realizeCount();
        }
      });
    },

    captureClick() {
      document.addEventListener('click', e => {

        const el = e.target;

        if (el.classList.contains('btn-num')) this.addNum(el.innerText);
        if (el.classList.contains('btn-clear')) this.clear();
        if (el.classList.contains('btn-del')) this.del();
        if (el.classList.contains('btn-eq')) this.realizeCount();
      });
    },

    // realizar a conta
    realizeCount() {
      let conta = this.display.value;

      try {
        conta = eval(conta);

        if (!conta) {
          alert('Conta inválida!');
          return;
        }

        this.display.value = String(conta);
      } catch (e) {
        alert('Conta inválida!');
        return;
      }
    },

    // Limpar o display
    clear() {
      this.display.value = '';
    },

    // Apagar um dado
    del() {
      this.display.value = this.display.value.slice(0, -1);
    },

    addNum(value) {
      this.display.value += value;
      this.display.focus();
    }
  };
}

const calculator = createCalculator();
calculator.inicia();
