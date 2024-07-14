
document.getElementById('firstButton').addEventListener('click', function(){
        document.getElementById("firstPlus").removeAttribute('disabled')
        document.getElementById("firstMinus").removeAttribute('disabled')
});

let clickCount = 0
document.getElementById('firstPlus').addEventListener('click', function(){
    clickCount ++;
    const getButton = document.getElementById('firstButton')
    getButton.innerText = clickCount 
})

document.getElementById('firstMinus').addEventListener('click', function() {
    clickCount--;
    if (clickCount >= 0) {
        document.getElementById('firstButton').innerText = clickCount;
    }
    else{
        document.getElementById('firstMinus').setAttribute('disabled', 'true')
    }
})


const placeholder = document.getElementById('couponInput')
const holderText = placeholder.value
console.log(holderText)
if(holderText === 'SELL200'){
    document.getElementById('couponButton').setAttribute('disabled', 'false');
}
else{

}