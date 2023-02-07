const ladoCuadrado = 5;
const perimetroCuadrado = ladoCuadrado * 4;

const areaCuadrado = ladoCuadrado  * ladoCuadrado;

function calcularCuadrado(lado) {
    return {
        perimetro: lado * 4,
        area: lado * lado,
    }
    
}
console.log(calcularCuadrado(5));



const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const ladoTrianguloBase = 6;
const alturaTriangulo = 5.5;


const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + ladoTrianguloBase;
const areaTriangulo = (ladoTrianguloBase * alturaTriangulo)/2;



function calcularTriangulo (lado1, lado2,base, altura ) {
   return {
     perimetro: lado1 + lado2 + base,
     area: (base * altura) / 2 ,
   };
    
}
console.log(calcularTriangulo(6,6,4, 5.5));


console.log({
    ladoCuadrado,
    perimetroCuadrado,
    areaCuadrado,
    perimetroTriangulo,
    areaTriangulo,

});

