// Crie um programa com um objeto para armazenar dados de um programador como nome, idade e tecnologias que trabalha.

const programador = {
  nome: 'Marina',
  idade: 30,
  tecnologias: [
    { 
      nome: 'C++', 
      especialidade: 'Desktop' 
    },
    { 
      nome: 'Python', 
      especialidade: 'Data Science' 
    },
    { 
      nome: 'JavaScript', 
      especialidade: 'Web/Mobile' 
    }
  ]
}

console.log(`O usuário ${programador.nome} tem ${programador.idade} e usa a tecnologia ${programador.tecnologias[0].nome} com especialidade em ${programador.tecnologias[0].especialidade}`);
