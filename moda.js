function calcularModa(lista) {
    const listaCount = {};
    
    for (let i = 0; i < lista.length; i++) {
        const element = lista[i];

        if (listaCount[element]) {
            listaCount[element] += 1;            
        }else{
            listaCount[element] = 1;            

        }
        
    }
    console.log(listaCount);
}
calcularModa([1,2,3,4,1,'a','b','c','c','c','b','b','b','a','a'])