const inputTarefa = document.querySelector('.input-tarefa');
const btnTarefa = document.querySelector('.btn-tarefa');
const tarefas = document.querySelector('.tarefas');

function criaLi() { // Cria um elemento li
  const li = document.createElement('li');
  return li;
}

inputTarefa.addEventListener('keypress', function (e) { // Enviar a terefa com o enter
  if (e.keyCode === 13) {
    if (!inputTarefa.value) return;
    criaTarefa(inputTarefa.value);
  }
});

function limpaInput() { // Após enviar a tarefa, vai retornar e limpar o input
  inputTarefa.value = '';
  inputTarefa.focus();
}

function criaBotaoApagar(li) {
  li.innerText += ' ';
  const botaoApagar = document.createElement('button'); // Cria um elemento button
  botaoApagar.innerText = 'Apagar'; // Escreve no elemento button 'Apagar'
  botaoApagar.setAttribute('class', 'apagar'); // Coloca uma classe
  botaoApagar.setAttribute('title', 'Apagar esta tarefa'); // Coloca um título
  li.appendChild(botaoApagar); // Adiciona o botão
}

function criaTarefa(textoInput) { // Adiciona a tarefa
  const li = criaLi();
  li.innerText = textoInput;
  tarefas.appendChild(li);
  limpaInput();
  criaBotaoApagar(li);
  salvarTarefas();
}


btnTarefa.addEventListener('click', function () {
  if (!inputTarefa.value) return;
  criaTarefa(inputTarefa.value);
});

document.addEventListener('click', function (e) {
  const el = e.target;

  if (el.classList.contains('apagar')) {
    el.parentElement.remove(); // Remover a tarefa
  }

});

function salvarTarefas() { // Salva as tarefas no local storage
  const liTarefas = tarefas.querySelectorAll('li');
  const listadeTarefas = [];

  for (let tarefa of liTarefas) {
    let tafrefaTexto = tarefa.innerText;
    tafrefaTexto = tafrefaTexto.replace('Apagar', '').trim();
    listadeTarefas.push(tafrefaTexto);
  }

  const tarefasJSON = JSON.stringify(listadeTarefas);
  localStorage.setItem('tarefas', tarefasJSON);
}

function adicionaTarefasSalvas() {
  const tarefas = localStorage.getItem('tarefas');
  const listadeTarefas = JSON.parse(tarefas);

  for (let tarefa of listadeTarefas) {
    criaTarefa(tarefa);
  }
}

adicionaTarefasSalvas();