// Objeto 

// let array = [1,2,3];
// array.push(4);
// array[0] = 'Luiz';
// array = 'outra';
//console.log(array);

// const nome01 = 'Luizs';
// const sobrenome01 = 'Mianda';
// const idade01 = 25;

// const pessoa1 = {
//     nome: 'Luk',
//     sobrenome: 'Miranda',
//     idade: 25
// };
// const pessoa2 = {
//     nome: 'Luk',
//     sobrenome: 'Miranda',
//     idade: 25
// };

// function criaPessoa (nome, sobrenome, idade) {
//     return {
//         nome: nome,
//         sobrenome: sobrenome,
//         idade: idade
//     };
// }

// const pessoa1 = criaPessoa('Luiz', 'Otavio', 25);
// const pessoa2 = criaPessoa('Alberto', 'tavio', 2);
// const pessoa3 = criaPessoa('Maria', 'vio', 45);
// const pessoa4 = criaPessoa('Mar', 'Ota', 65);
// const pessoa5 = criaPessoa('Nau', 'tavi', 15);
// const pessoa6 = criaPessoa('Marcu', 'Ot', 95);

// console.log(pessoa1.nome, pessoa2.idade);

const pessoa1 = {
    nome: 'Luiz',
    sobrenome: 'Miranda',
    idade: 25,
  
    fala() {
      console.log(`A minha idade atual é ${this.idade}.`);
    },
  
    incrementaIdade() {
      this.idade++;
    }
  };
  
  pessoa1.fala();
  pessoa1.incrementaIdade();
  pessoa1.fala();
  pessoa1.incrementaIdade();
  pessoa1.fala();
  pessoa1.incrementaIdade();
  pessoa1.fala();