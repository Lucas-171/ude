// Sintaxe de notação de objeto
const pessoa = {
    nome: 'João',
    idade: 25,
    falar: function() {
      console.log('Oi!');
    }
  };
  
  console.log(pessoa.nome);  // 'João'
  pessoa.falar();  // 'Oi!'
  
  // Função construtora
  function Pessoa(nome, idade) {
    this.nome = nome;
    this.idade = idade;
    this.falar = function() {
      console.log('Oi!');
    }
  }
  
  const pessoa2 = new Pessoa('Maria', 30);
  console.log(pessoa2.nome);  // 'Maria'
  pessoa2.falar();  // 'Oi!'
  