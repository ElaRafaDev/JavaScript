const h1 = document.querySelector('.container h1');
const data = new Date();

function getDiaSemanaTexto(diaSemana) {
  dias = ['Domingo', 'Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sábado'];
  return dias[diaSemana];
}

function getMesTexto(numeroMes) {
  const meses = ['janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho', 'julho', 'agosto', 'setembro', 'outubro', 'novembro', 'dezembro'];
  return meses[numeroMes];
}

function zeroAEsquerda(num) {
  return num >= 10 ? num : `0${num}`;
}

function setData(data) {
  const diaSemana = data.getDay();
  const numeroMes = data.getMonth();
  
  const nomeDia = getDiaSemanaTexto(diaSemana);
  const nomeMes = getMesTexto(numeroMes);

  return `${nomeDia}, ${data.getDate()} de ${nomeMes} de ${data.getFullYear()} ${zeroAEsquerda(data.getHours())}:${zeroAEsquerda(data.getMinutes())}`
}

h1.innerHTML = setData(data);

// const h1 = document.querySelector('.container h1');
// const data = new Date();

// h1.innerHTML = data.toLocaleString('pt-Br', {dateStyle: 'full', timeStyle: 'short'});