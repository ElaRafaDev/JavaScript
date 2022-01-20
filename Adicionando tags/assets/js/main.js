const elementos = [
  { tag: 'p', texto: 'Tag de parágrafo criada e adicionada via JavaScript' },
  { tag: 'div', texto: 'Tag de div criada e adicionada via JavaScript' },
  { tag: 'section', texto: 'Tag de section criada e adicionada via JavaScript' },
  { tag: 'footer', texto: 'Tag de footer criada e adicionada via JavaScript' },
];

const container = document.querySelector('.container'); 
const div = document.createElement('div'); // Cria uma div

for (let i = 0; i < elementos.length; i++) {
  let { tag, texto } = elementos[i];
  let tagCriada = document.createElement(tag); // Cria a tag
  let textoCriado = document.createTextNode(texto); // Cria o texto

  tagCriada.appendChild(textoCriado); // adiciona o texto na tag
  // tagCriada.innerText = texto; // Adiciona o texto na tag
  div.appendChild(tagCriada) // Adiciona a tag na div criada
}
container.appendChild(div); // Adiciona a div na section da classe 'container'