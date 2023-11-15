const alunos = ['Luiz', 'Maria', João];

delete alunos[1];
console.log(alunos[1]);

console.log(alunos.slice(0, -2));

const array = [1, 2, 3, 4, 5];
array.pop();
array[0] = 1024;
console.log(array); // [ 1024, 2, 3, 4 ]