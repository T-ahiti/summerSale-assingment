
const totals = {
    multiply1: 0,
    multiply2: 0,
    multiply3: 0,
    multiply4: 0,
    multiply5: 0,
    multiply6: 0
};




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
    const multiply1 = 39 * clickCount
    getPrice.innerText = multiply1

    addToTotal('K. Accessories ', multiply1)

    totals.multiply1 = multiply1
    updateTotalCostDisplay()
})

document.getElementById('firstMinus').addEventListener('click', function() {
    clickCount--; 
    const getPrice = document.getElementById('firstPrice')
    const multiply1 = 39 * clickCount
    getPrice.innerText = multiply1
        
    if (clickCount >= 0) {
        document.getElementById('firstButton').innerText = clickCount;
    }
    else{
        document.getElementById('firstMinus').setAttribute('disabled', 'true')
    }

    addToTotal('K. Accessories ', multiply1)

    totals.multiply1 = multiply1
    updateTotalCostDisplay()
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
    const multiply2 = 39 * clickCount2
    getPrice.innerText = multiply2

    addToTotal('K. Accessories2 ', multiply2)

    totals.multiply2 = multiply2
    updateTotalCostDisplay()
})

document.getElementById('secondMinus').addEventListener('click', function() {
    clickCount2--; 
    const getPrice = document.getElementById('secondPrice')
    const multiply2 = 39 * clickCount2
    getPrice.innerText = multiply2
        
    if (clickCount2 >= 0) {
        document.getElementById('secondButton').innerText = clickCount2;
    }
    else{
        document.getElementById('secondMinus').setAttribute('disabled', 'true')
    }

    addToTotal('K. Accessories2 ', multiply2)

    totals.multiply2 = multiply2
    updateTotalCostDisplay()
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
const multiply3 = 39 * clickCount3
getPrice.innerText = multiply3

addToTotal('Home Cooker ', multiply3)

totals.multiply3 = multiply3
updateTotalCostDisplay()
})

document.getElementById('thirdMinus').addEventListener('click', function() {
clickCount3--; 
const getPrice = document.getElementById('thirdPrice')
const multiply3 = 39 * clickCount3
getPrice.innerText = multiply3
    
if (clickCount3 >= 0) {
    document.getElementById('thirdButton').innerText = clickCount3;
}
else{
    document.getElementById('thirdMinus').setAttribute('disabled', 'true')
}

addToTotal('Home Cooker ', multiply3)

totals.multiply3 = multiply3
updateTotalCostDisplay()
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
const multiply4 = 39 * clickCount4
getPrice.innerText = multiply4

addToTotal('Sports Back Cap ', multiply4)

totals.multiply4 = multiply4
updateTotalCostDisplay()
})

document.getElementById('fourthMinus').addEventListener('click', function() {
clickCount4--; 
const getPrice = document.getElementById('fourthPrice')
const multiply4 = 39 * clickCount4
getPrice.innerText = multiply4
    
if (clickCount4 >= 0) {
    document.getElementById('fourthButton').innerText = clickCount4;
}
else{
    document.getElementById('fourthMinus').setAttribute('disabled', 'true')
}

addToTotal('Sports Back Cap', multiply4)

totals.multiply4 = multiply4
updateTotalCostDisplay()
})



document.getElementById('fifthButton').addEventListener('click', function(){
    document.getElementById("fifthPlus").removeAttribute('disabled')
    document.getElementById("fifthMinus").removeAttribute('disabled')
}); 

let clickCount5 = 0
document.getElementById('fifthPlus').addEventListener('click', function(){
clickCount5 ++;
const getButton = document.getElementById('fifthButton')
getButton.innerText = clickCount5 
const getPrice = document.getElementById('fifthPrice')
const multiply5 = 39 * clickCount5
getPrice.innerText = multiply5

addToTotal('Full Jersey Set ', multiply5)

totals.multiply5 = multiply5
updateTotalCostDisplay()
})

document.getElementById('fifthMinus').addEventListener('click', function() {
clickCount5--; 
const getPrice = document.getElementById('fifthPrice')
const multiply5 = 39 * clickCount5
getPrice.innerText = multiply5
    
if (clickCount5 >= 0) {
    document.getElementById('fifthButton').innerText = clickCount5;
}
else{
    document.getElementById('fifthMinus').setAttribute('disabled', 'true')
}

addToTotal('Full Jersey Set', multiply5)

totals.multiply5 = multiply5
updateTotalCostDisplay()
})



document.getElementById('sixthButton').addEventListener('click', function(){
    document.getElementById("sixthPlus").removeAttribute('disabled')
    document.getElementById("sixthMinus").removeAttribute('disabled')
}); 

let clickCount6 = 0
document.getElementById('sixthPlus').addEventListener('click', function(){
clickCount6 ++;
const getButton = document.getElementById('sixthButton')
getButton.innerText = clickCount6
const getPrice = document.getElementById('sixthPrice')
const multiply6 = 39 * clickCount6
getPrice.innerText = multiply6

addToTotal('Sports cates ', multiply6)

totals.multiply6 = multiply6
updateTotalCostDisplay()
})

document.getElementById('sixthMinus').addEventListener('click', function() {
clickCount6--; 
const getPrice = document.getElementById('sixthPrice')
const multiply6 = 39 * clickCount6
getPrice.innerText = multiply6
    
if (clickCount6 >= 0) {
    document.getElementById('sixthButton').innerText = clickCount6;
}
else{
    document.getElementById('sixthMinus').setAttribute('disabled', 'true')
}

addToTotal('Sports cates', multiply6)

totals.multiply6 = multiply6
updateTotalCostDisplay()
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



// last total price area

function calculateTotalCost() {
    return totals.multiply1 + totals.multiply2 + totals.multiply3 + totals.multiply4 + totals.multiply5 + totals.multiply6;
}

function updateTotalCostDisplay() {
    const totalCost = calculateTotalCost();
    const getArea = document.getElementById('updatedTotal');
        getArea.innerText = `Total Cost: ${totalCost}`;
   }
