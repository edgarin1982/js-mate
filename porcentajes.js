const inputPrice = document.querySelector('#price');
const inputCoupon = document.querySelector('#coupon');
const btn = document.querySelector('#calcular');
const pResult = document.querySelector('#result')


btn.addEventListener('click', precioConDescuento);

/* const couponsObj = {
    'EdgarIt': 30,
    'Edgar_suerte': 50,
    'EdgarAll': 70,
};
 */

const couponsList = [];
couponsList.push({
    name: 'EdgarIt',
    discount: 30,
})


function precioConDescuento() {
    const price = Number(inputPrice.value);
    const coupon = inputCoupon.value;
    
    if (!price || !coupon) {
        pResult.innerText = alert('Por favor llena correctamente los campos')
        return;
    } 

    let discount;
    const couponInArray = couponsList.find(item => item.name == coupon)
    

    if (couponInArray) {
        discount = couponInArray.discount;        
    } else {
        pResult.innerText = alert('Cupon invalido, ingrese cupon autorizado')
            return;          
    }
    console.log({
        coupon,
        discount,
        couponInArray,
    });
    
   /*  if (couponsObj[coupon]) {
        discount = couponsObj[coupon];        
    } else {
        pResult.innerText = alert('Cupon invalido, ingrese cupon autorizado')
            return;            
    }
 */



    
    /* switch (coupon) {
        case 'Edgar_suerte':
            discount = 30;            
            break;
    
        case 'Edgar2023':
            discount = 50;            
            break;
    
        case 'EdgarIT':
            discount = 50;            
            break;
    
        case 'EdgarAll':
            discount = 70;            
            break;
    
        default:
            pResult.innerText = alert('Cupon invalido, ingrese cupon autorizado')
            return;            
    } */


    /* if (coupon == 'Edgar_suerte') {
        discount = 30;        
    }else if(coupon == 'Es tu dia de suerte'){
        discount = 50;
    }else{
        pResult.innerText = alert('Cupon invalido, ingrese cupon autorizado')
        return;
    }   
 */
    const newPrice = (price * (100 - discount)) /100;
    
    pResult.innerHTML = 'El nuevo precio con descuento es $' + newPrice;
       
}
