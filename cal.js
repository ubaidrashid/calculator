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
let pehLay = document.querySelector('.pehlay')
function forDark(){
    body.classList.remove('body')
    eLse.classList.remove('none')
    iF.classList.add('none')
    pehLay.classList.add('white')
    pehLay.classList.remove('black')
}
function forLight(){
    pehLay.classList.remove('white')
    pehLay.classList.add('black')
    body.classList.add('body')
    eLse.classList.add('none')
    iF.classList.remove('none')
}
