const num1 = document.querySelector('#num1');
const num2 = document.querySelector('#num2');
const addBtn = document.querySelector('#add');
const subBtn = document.querySelector('#sub');
const multiplyBtn = document.querySelector('#multiply');
const devideBtn = document.querySelector('#divide');

const out = document.querySelector('#out');

function getInputValues() {
    const value1 = parseInt(num1.value);
    const value2 = +num2.value;
    return [value1, value2];
}

function addHandler() {
    const values = getInputValues();
    const result = values[0] + values[1];
    displayResult(result)();
}
function subHandler() {
    const values = getInputValues();
    const result = values[0] - values[1];
    displayResult(result)();
}


function multiplyHandler() {
    const values = getInputValues();
    const result = values[0] * values[1];
    displayResult(result)();
}

function divideHandler() {
    const values = getInputValues();
    const result = Math.round(values[0]/values[1]);
    displayResult(result)();
}


function displayResult(result) {
    out.closest('.output').style.display = 'block';
    out.innerHTML = `Result = ${result}`;
}



addBtn.addEventListener('click', addHandler);
subBtn.addEventListener('click', subHandler);

multiplyBtn.addEventListener('click', multiplyHandler);
devideBtn.addEventListener('click', divideHandler);


// SECOND PART

let arr = [2, 8, 6, 14, 25, 44, 'Adel', 'love', 'CV'];
let newArr = [];

let val = document.querySelector('.indexOfmeth_inp');




document.querySelector('.indexOfmeth_btn').onclick = ()=>{
    let searchInp = val.value;
    let idx = arr.indexOf(searchInp);
    
    let out = document.querySelector('.indexOfmeth_out');
    

    if (idx==-1){
        out.innerHTML = 'I love programming!';
    } else {
        out.innerHTML = "Search element was found on position " + `${idx}`;
    }
}


// Pop and push section
let car = [];

document.querySelector('.push').onclick = () =>{
    let id = +document.querySelector('#goods').value;
    if( !car.includes(id) ){
        car.push(id)
    }
   
    console.log(car); 
    document.querySelector('#goods').value = "";
}

document.querySelector('.pop').onclick = () =>{
    let id = +document.querySelector('#goods').value;
    let goods = car.pop();
    console.log('Товар ' + goods + ' було видалено');
    console.log(car); 
}