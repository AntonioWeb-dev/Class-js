const domains = ["google.com", "mid.com", "kk.com", "lig.br"];

// callback é uma função para ser passada como paramento
const filterNames: string[] = []

const callbackForForEach = (valor: string, index: number) => { 
    console.log(valor, index)
    if (valor.includes(".br")) {
        filterNames.push(valor)
    }
}

// forEach
// ele vai percorrer o array, porém não tem retorno
console.log(domains.forEach(callbackForForEach))

// filter
// ele vai percorrer o array, porém retorno apenas os resultados true, mas não altera os estado
console.log("FILTER RESULT: ", domains.filter((valor: string) => valor.length >= 8))

// map
// ele vai percorrer o array retornando um novo array
const numbersInteger: number[] = [1,2,3,4,5,6];
function transformNumber(valor: number) {
    return valor-1;
}

console.log("MAP RESULT: ", numbersInteger.map(transformNumber));