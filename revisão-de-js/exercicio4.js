var notas = [6.0,8.7,9.0]

var media = notas.reduce((acumulador, valorAtual) => acumulador + valorAtual, 0)/notas.length;


console.log(`A primeira nota do aluno é ${notas[0]}`);
console.log(`A segunda nota do aluno é ${notas[1]}`);
console.log(`A terceira nota do aluno é ${notas[2]}`);
console.log(`A média do aluno é ${media.toFixed(2)}`);