//const arr =[500,400,1000,700]

function promedio(arr) {
/* 
    let sumaLista = 0;
    for (let index = 0; index < arr.length; index++) {
        sumaLista = sumaLista + arr[i];
        
    }  */

    function sumarTodosElementos(valorAcumulado, nuevoValor) {
        return valorAcumulado + nuevoValor;
        
    }


    const sumaLista = arr.reduce(sumarTodosElementos);
    
    const promedio = sumaLista / arr.length;
    return promedio;        
}

console.log(promedio());


 