//altura de triangulo isosceles
console.group('isosceles');
function calcularAltura(lado, base) {
    if (lado == base) {
        console.warn('Triangulo incorrecto');
        
    } else {
         return Math.sqrt( (lado ** 2) - ((base **2)) / 4);
        
    }    
}
//console.log(calcularAltura(6, 5));




function alturaEscaleno(lado1, lado2, lado3){
    const semiperimetro = (lado1 + lado2 +lado3) / 2;

    return Math.sqrt(semiperimetro * (semiperimetro - lado1)*(semiperimetro - lado2)*(semiperimetro - lado3)) 
    
    
}
console.log(alturaEscaleno(3, 4, 5));



console.groupEnd('isosceles')