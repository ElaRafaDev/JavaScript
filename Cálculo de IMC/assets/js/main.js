const form = document.querySelector('#formulario'); // Capturar o evento de submit do usuário

form.addEventListener('submit', function (e) { // Adicionou um evento 'submit'
  e.preventDefault(); // Não deixa o form ser enviado
  const inputPeso = e.target.querySelector('#peso'); // Captura os dados do input
  const inputAltura = e.target.querySelector('#altura'); // Captura os dados do input

  const peso = Number(inputPeso.value); // Conversão do input para número
  const altura = Number(inputAltura.value); // Conversão do input para número

  if (!peso && !altura) {
    setResultado('Peso e altura inválidos!', false); // Informa false para colocar o fundo vermelho de erro
    return;
  }
  if (!peso) {
    setResultado('Peso inválido!', false); // Informa false para colocar o fundo vermelho de erro
    return;
  }
  if (!altura) {
    setResultado('Altura inválida!', false); // Informa false para colocar o fundo vermelho de erro
    return;
  }

  const imc = getImc(peso, altura); // Calcular o IMC
  const nivelImc = getNivelImc(imc); // Definir o nível do IMC

  const msg = `Seu IMC é ${imc} (${nivelImc}).`; // Informa o IMC e o nível 

  setResultado(msg, true);  // Informa true para colocar o fundo verde
});

function getNivelImc(imc) { // Definir o nível do IMC
  const nivel = ['Abaixo do peso', 'Peso normal', 'Sobrepeso', 'Obesidade grau 1', 'Obesidade grau 2', 'Obesidade grau 3'];

  if (imc >= 39.9) return nivel[5];
  if (imc >= 34.9) return nivel[4];
  if (imc >= 29.9) return nivel[3];
  if (imc >= 24.9) return nivel[2];
  if (imc >= 18.5) return nivel[1];
  if (imc < 18.5) return nivel[0];
}

function getImc(peso, altura) { // Calcular o IMC
  const imc = peso / altura ** 2;
  return imc.toFixed(2);
}

function criaP() { // Cria um parágrafo
  const p = document.createElement('p');
  return p;
}

function setResultado(msg, isValid) {
  const resultado = document.querySelector('#resultado'); // Seleciona a div de resultado
  resultado.innerHTML = ''; // Zera o HTML do resultado 

  const p = criaP(); // Cria um parágrafo

  if (isValid) {
    p.classList.add('paragrafo-resultado-true'); // Adiciona uma classe
  } else {
    p.classList.add('paragrafo-resultado-false'); // Adiciona uma classe
  }

  p.innerHTML = msg;
  resultado.appendChild(p); // Adiciona o parágrafo no resultado
}