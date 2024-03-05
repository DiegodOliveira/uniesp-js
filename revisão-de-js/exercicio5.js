var notas = [7.0,9.3,8.8]

var media = notas.reduce((acumulador, valorAtual) => acumulador + valorAtual, 0)/notas.length;

function verificador(){
    if( media >= 7){
        console.log("Aluno aprovado");
    }else{
        console.log("Aluno reprovado");
    }
}

console.log(`A primeira nota do aluno é ${notas[0]}`);
console.log(`A segunda nota do aluno é ${notas[1]}`);
console.log(`A terceira nota do aluno é ${notas[2]}`);
console.log(`A média do aluno é ${media.toFixed(2)}`);
verificador();