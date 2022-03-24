let valueSelected = "";
let secondValue = "";
let operation = "";

let inputSpace = document.getElementById('number');

let one = document.querySelector('.one');
let two = document.querySelector('.two');
let three = document.querySelector('.three');
let four = document.querySelector('.four');
let five = document.querySelector('.five');
let six = document.querySelector('.six');
let seven = document.querySelector('.seven');
let eight = document.querySelector('.eight');
let nine = document.querySelector('.nine');
let zero = document.querySelector('.zero');
let dot = document.querySelector('.dot');

let plus = document.querySelector('.plus');
let minus = document.querySelector('.minus');
let times = document.querySelector('.times');
let divide = document.querySelector('.divide');

let del = document.querySelector('.delete');

let equal = document.querySelector('.equal');

let reset = document.querySelector('.reset');

one.addEventListener('click', ()=>{
    if(operation == ""){
        valueSelected = valueSelected + "1";
    }else {
        secondValue = secondValue + "1";
    }
    setValue()
})

two.addEventListener('click', ()=>{
    if(operation == ""){
        valueSelected = valueSelected + "2";
    }else {
        secondValue = secondValue + "2";
    }
    setValue()
})

three.addEventListener('click', ()=>{
    if(operation == ""){
        valueSelected = valueSelected + "3";
    }else {
        secondValue = secondValue + "3";
    }
    setValue()
})

four.addEventListener('click', ()=>{
    if(operation == ""){
        valueSelected = valueSelected + "4";
    }else {
        secondValue = secondValue + "4";
    }
    setValue()
})

five.addEventListener('click', ()=>{
    if(operation == ""){
        valueSelected = valueSelected + "5";
    }else {
        secondValue = secondValue + "5";
    }
    setValue()
})

six.addEventListener('click', ()=>{
    if(operation == ""){
        valueSelected = valueSelected + "6";
    }else {
        secondValue = secondValue + "6";
    }
    setValue()
})

seven.addEventListener('click', ()=>{
    if(operation == ""){
        valueSelected = valueSelected + "7";
    }else {
        secondValue = secondValue + "7";
    }
    setValue()
})

eight.addEventListener('click', ()=>{
    if(operation == ""){
        valueSelected = valueSelected + "8";
    }else {
        secondValue = secondValue + "8";
    }
    setValue()
})

nine.addEventListener('click', ()=>{
    if(operation == ""){
        valueSelected = valueSelected + "9";
    }else {
        secondValue = secondValue + "9";
    }
    setValue()
})

zero.addEventListener('click', ()=>{
    if(operation == ""){
        valueSelected = valueSelected + "0";
    }else {
        secondValue = secondValue + "0";
    }
    setValue()
})

dot.addEventListener('click', ()=>{
    if(operation == ""){
        valueSelected = valueSelected + ".";
    }else {
        secondValue = secondValue + ".";
    }
    setValue()
})

del.addEventListener('click', ()=> {
    if(operation == ""){
        valueSelected = valueSelected.slice(0, valueSelected.length - 1);
    }else {
        secondValue = secondValue.slice(0, secondValue.length - 1);
    }
    setValue();
})

plus.addEventListener('click', ()=> {
    changeOp("+");
})

minus.addEventListener('click', ()=> {
    changeOp("-");
})

times.addEventListener('click', ()=> {
    changeOp("*");
})

divide.addEventListener('click', ()=> {
    changeOp("/");
})

const setValue = ()=>{
    if(operation == ""){
        inputSpace.value = valueSelected;
    }else{
        inputSpace.value = secondValue;
    }
}

const changeOp = (op) => {
    operation = op;
    setValue();
}

setValue()

let result;

const calculate = () => {
    switch(operation){
        case "+":
            result = parseFloat(valueSelected) + parseFloat(secondValue);
            inputSpace.value = result;
            break;
        case "-":
            result = parseFloat(valueSelected) - parseFloat(secondValue);
            inputSpace.value = result;
            break;
        case "*":
            result = parseFloat(valueSelected) * parseFloat(secondValue);
            inputSpace.value = result;
            break;
        case "/":
            result = parseFloat(valueSelected) / parseFloat(secondValue);
            inputSpace.value = result;
            break;
        default:
            break;
    }
}

equal.addEventListener('click', ()=>{
    if(operation == ""){
        inputSpace.value = "0";
    }else{
        calculate();
    }
})

reset.addEventListener('click', ()=>{
    operation = "";
    valueSelected = "";
    secondValue = "";
    inputSpace.value = "";
    result = ""
    inputSpace.ariaPlaceholder = "0"
})