/* function par(lista) {


    if (lista.length % 2) {
        return 'Es par'
        
    }else{
        return 'Es impar'
    }
    
}
console.log(lista(10, 20));
 */

function esPar(lista) {
    return !(lista.length % 2)   
}
function esImpar(lista) {
    return  lista.length % 2;
}

function calcularMediana(lista) {
    const listaEsPar = esPar(lista);

    if (listaEsPar) {
        const MitadListaPar = lista[(lista.length / 2) - 1];
        const MitadListaImpar = lista[lista.length / 2];


        const listaMitades = [MitadListaPar, MitadListaImpar];
        promedio(listaMitades)
    }else{
        const meadianImpar = Math.floor(lista.length / 2);
        console.log(meadianImpar);
        console.log(lista[meadianImpar]);
    }
    
}
console.log(calcularMediana([10,20,30,60,70,100]))

function promedio(arr) {
    
            
        function sumarTodosElementos(valorAcumulado, nuevoValor) {
            return valorAcumulado + nuevoValor;
            
        }
    
    
        const sumaLista = arr.reduce(sumarTodosElementos);
        
        const promedio = sumaLista / arr.length;
        return promedio;        
}



