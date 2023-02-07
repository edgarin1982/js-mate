const inputPrice = document.querySelector('#price');
const inputDiscount = document.querySelector('#discount');
const btn = document.querySelector('#calcular');
const pResult = document.querySelector('#result')

btn.addEventListener('click', precioConDescuento);

function precioConDescuento() {
    const price = inputPrice.value;
    const discount = inputDiscount.value;
    const newPrice = (price * (100 - discount)) /100;

    pResult.innerHTML = 'El nuevo precio con descuento es $' + newPrice;
    
}