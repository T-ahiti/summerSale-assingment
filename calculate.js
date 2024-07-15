
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



document.getElementById('secondButton').addEventListener('click', function(){
        document.getElementById("secondPlus").removeAttribute('disabled')
        document.getElementById("secondMinus").removeAttribute('disabled')
}); 

let clickCount2 = 0
document.getElementById('secondPlus').addEventListener('click', function(){
    clickCount2 ++;
    const getButton = document.getElementById('secondButton')
    getButton.innerText = clickCount2 
    const getPrice = document.getElementById('secondPrice')
    const multiply = 39 * clickCount2
    getPrice.innerText = multiply

    addToTotal('K. Accessories2 ', multiply)
})

document.getElementById('secondMinus').addEventListener('click', function() {
    clickCount2--; 
    const getPrice = document.getElementById('secondPrice')
    const multiply = 39 * clickCount2
    getPrice.innerText = multiply
        
    if (clickCount2 >= 0) {
        document.getElementById('secondButton').innerText = clickCount2;
    }
    else{
        document.getElementById('secondMinus').setAttribute('disabled', 'true')
    }

    addToTotal('K. Accessories2 ', multiply)
})


document.getElementById('thirdButton').addEventListener('click', function(){
    document.getElementById("thirdPlus").removeAttribute('disabled')
    document.getElementById("thirdMinus").removeAttribute('disabled')
}); 

let clickCount3 = 0
document.getElementById('thirdPlus').addEventListener('click', function(){
clickCount3 ++;
const getButton = document.getElementById('thirdButton')
getButton.innerText = clickCount3 
const getPrice = document.getElementById('thirdPrice')
const multiply = 39 * clickCount3
getPrice.innerText = multiply

addToTotal('Home Cooker ', multiply)
})

document.getElementById('thirdMinus').addEventListener('click', function() {
clickCount3--; 
const getPrice = document.getElementById('thirdPrice')
const multiply = 39 * clickCount3
getPrice.innerText = multiply
    
if (clickCount3 >= 0) {
    document.getElementById('thirdButton').innerText = clickCount3;
}
else{
    document.getElementById('thirdMinus').setAttribute('disabled', 'true')
}

addToTotal('Home Cooker ', multiply)
})





document.getElementById('fourthButton').addEventListener('click', function(){
    document.getElementById("fourthPlus").removeAttribute('disabled')
    document.getElementById("fourthMinus").removeAttribute('disabled')
}); 

let clickCount4 = 0
document.getElementById('fourthPlus').addEventListener('click', function(){
clickCount4 ++;
const getButton = document.getElementById('fourthButton')
getButton.innerText = clickCount4 
const getPrice = document.getElementById('fourthPrice')
const multiply = 39 * clickCount4
getPrice.innerText = multiply

addToTotal('Sports Back Cap ', multiply)
})

document.getElementById('fourthMinus').addEventListener('click', function() {
clickCount4--; 
const getPrice = document.getElementById('fourthPrice')
const multiply = 39 * clickCount4
getPrice.innerText = multiply
    
if (clickCount4 >= 0) {
    document.getElementById('fourthButton').innerText = clickCount4;
}
else{
    document.getElementById('fourthMinus').setAttribute('disabled', 'true')
}

addToTotal('Sports Back Cap', multiply)
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
