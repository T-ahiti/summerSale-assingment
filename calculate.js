
document.getElementById('firstButton').addEventListener('click', function(){
        document.getElementById("firstPlus").removeAttribute('disabled')
        document.getElementById("firstMinus").removeAttribute('disabled')
});

let clickCount = 0
document.getElementById('firstPlus').addEventListener('click', function(){
    clickCount ++;
    const getButton = document.getElementById('firstButton')
    getButton.innerText = clickCount 
    const getPrice = document.getElementById('firstPrice')
    const multiply = 39 * clickCount
    getPrice.innerText = multiply

    const total = document.getElementById('totalPriceArea')
    total.innerText = multiply
})

document.getElementById('firstMinus').addEventListener('click', function() {
    clickCount--; 
    const getPrice = document.getElementById('firstPrice')
    const multiply = 39 * clickCount
    getPrice.innerText = multiply
        
    if (clickCount >= 0) {
        document.getElementById('firstButton').innerText = clickCount;
    }
    else{
        document.getElementById('firstMinus').setAttribute('disabled', 'true')
    }

    const total = document.getElementById('totalPriceArea')
    total.innerText = multiply
})

// coupon
const placeholder = document.getElementById('couponInput')
placeholder.addEventListener('input', function(){
const holderText = this.value
    if(holderText === 'SELL200'){
      document.getElementById('couponButton').removeAttribute('disabled');
}
    else{
      document.getElementById('couponButton').setAttribute('disabled', 'true');
}
})
