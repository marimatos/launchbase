// Crie um programa que armazena um array de usuários (objetos), cada usuário tem um nome e suas tecnologias (novo array), por exemplo:

const usuarios = [
  {
    nome: 'Marina',
    tecnologias: ['HTML', 'CSS']
  },
  {
    nome: 'Carlos',
    tecnologias: ['Python', 'SQL']
  },
  {
    nome: 'Maria',
    tecnologias: ['C++', 'Java']
  }
];

for ( i = 0; i < usuarios.length; i++) {
  return console.log(`${usuarios[i].nome} trabalha com ${usuarios[i].tecnologias}`)
}

