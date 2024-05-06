let display = document.getElementById('display');

function appendToDisplay(value) {
display.value += value;
}

function clearDisplay() {
display.value = '';
}

function calculate() {
try {
display.value = eval(display.value);
} catch (error) {
display.value = 'Error';
}
}




let body = document.querySelector('.kuch-bhi')
let main = document.querySelector('.main-two')
let iF = document.querySelector('.if')
let eLse = document.querySelector('.else')

function forDark(){
    body.classList.remove('body')
    eLse.classList.remove('none')
    iF.classList.add('none')
}
function forLight(){
    body.classList.add('body')
    eLse.classList.add('none')
    iF.classList.remove('none')
}
