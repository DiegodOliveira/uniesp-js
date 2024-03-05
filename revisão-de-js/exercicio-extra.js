function dobrar(numeros){
    const dobrados = numeros.map(numero => {
        return numero * 2;
    })

    return dobrados;
}

const numeros = [5, 8,34,67,34,58];
const novosNumeros = dobrar(numeros);

console.log(novosNumeros);