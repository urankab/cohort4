import functions from './functions.js';
import calculatorFunctions from './calculator.js'
import taxFunc from './taxes.js'
import arraysFunc from './arrays.js'

// Add the event listeners
//WORKING WITH ARRAYS----------------------------------------------
const inputNum = document.getElementById("arrayInput");
const addBtn = document.getElementById("addBtn");
const showBtn = document.getElementById("showBtn");
const totalBtn = document.getElementById("totalBtn");
const clearBtn = document.getElementById("clearBtn");
const output = document.getElementById("arrayMessage");

addBtn.addEventListener("click", function(){
    output.textContent = arraysFunc.addItem(inputNum.value);
    inputNum.value = '';
});

showBtn.addEventListener("click", function(){
    output.textContent = arraysFunc.showArray();
})

totalBtn.addEventListener("click", function(){
    output.textContent = arraysFunc.totalOfArray();
})

clearBtn.addEventListener("click", function(){
    output.textContent = arraysFunc.clearArray();
})

//TAXES------------------------------------------------------------

const onPressTax = document.getElementById("taxBtn");
//const updateResultTax = document.getElementById("taxField");
const salary = document.getElementById("salaryInput");
const taxAmount = document.getElementById("taxAmountField");

onPressTax.addEventListener("click", function(){
    taxAmount.value = taxFunc.getTaxAmount(salary.value);
});

//CALCULATOR--------------------------------------------------------

const onPress = document.getElementById("calculateBtn");
const input1 = document.getElementById("value1");
const input2 = document.getElementById("value2");
const plusChecked = document.getElementById("plusRadio");
const minusChecked = document.getElementById("minusRadio");
const multiplyChecked = document.getElementById("multiplyRadio");
const divideChecked = document.getElementById("divideRadio");
const updateResult = document.getElementById("answerField");

onPress.addEventListener("click", function(){
    switch(input1.value+input2.value!=undefined){
        case plusChecked.checked:
            updateResult.value = calculatorFunctions.add(input1.value, input2.value);
        break;
        case minusChecked.checked:
            updateResult.value = calculatorFunctions.subtract(input1.value, input2.value);
        break;
        case multiplyChecked.checked:
            updateResult.value = calculatorFunctions.multiply(input1.value, input2.value);
        break;
        case divideChecked.checked:
            updateResult.value = calculatorFunctions.divide(input1.value, input2.value);
        break;
        default:
            updateResult.value = calculatorFunctions.empty();
    } 
});

//Size
idNumber.addEventListener('change', (() => {
    idNumberSize.textContent = functions.size(idNumber.value);
}));
