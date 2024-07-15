
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

    addToTotal('K. Accessories ', multiply)
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

    addToTotal('K. Accessories ', multiply)
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


function addToTotal(name, multiply){
    console.log(name + ' ' + multiply);

    const getTotal = document.getElementById('totalPriceArea');
    const count = getTotal.childElementCount;

    let exists = false;
    for (let i = 0; i < count; i++) {
        if (getTotal.children[i].textContent.includes(name)) {
            getTotal.children[i].innerHTML = `${i + 1}. ${name} ${multiply}`;
            exists = true;
            break;
        }
    }

    if (!exists) {
        const p = document.createElement('p');
        p.innerHTML = `${count + 1}. ${name} ${multiply}`;
        getTotal.appendChild(p);
    }
}
