'use strict'

const Input1 = document.getElementById('textInput1');
const Input2 = document.getElementById('textInput2');
const plus = document.getElementById('plus');
const minus = document.getElementById('minus');
const times = document.getElementById('times');
const divide = document.getElementById('divide');
const equal = document.getElementById('equal');
const result = document.getElementById('textOutput');



plus.onclick = function () {
    console.log(Input1 + Input2)
}

minus.onclick = function () {
    console.log(Input1 - Input2)
}

times.onclick = function () {
    console.log(Input1 * Input2)
}

divide.onclick = function () {
    console.log(Input1 / Input2)
}

        

                 
         
