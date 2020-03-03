import functions from './functions.js';
import calculatorFunctions from './calculator.js'
import taxFunc from './taxes.js'

// Add the event listeners

//TAXES------------------------------------------------------------

var onPressTax = document.getElementById("taxBtn");
var updateResultTax = document.getElementById("taxField");
var salary = document.getElementById("salaryInput");

onPressTax.addEventListener("click", function(){
    updateResultTax.value = taxFunc.getIncomeTax(salary.value);
    // if (salary.value <= 48535){
    //     updateResultTax.value = taxFunc.getTax1(salary.value);
    // }
    // if (salary.value > 48535 && salary.value <= 97069){
    //     updateResultTax.value = taxFunc.getTax2(salary.value);
    // }
    // if (salary.value > 48535 && salary.value <= 97069){
    //     updateResultTax.value = taxFunc.getTax2(salary.value);
    // }
    // if (salary.value > 48535 && salary.value <= 97069){
    //     updateResultTax.value = taxFunc.getTax2(salary.value);
    // }
    // if (salary.value > 48535 && salary.value <= 97069){
    //     updateResultTax.value = taxFunc.getTax2(salary.value);
    // }else if (salary.value=undefined){
    //     updateResultTax.value = taxFunc.empty();
    // }
});

//CALCULATOR--------------------------------------------------------

var onPress = document.getElementById("calculateBtn");
var input1 = document.getElementById("value1");
var input2 = document.getElementById("value2");
var plusChecked = document.getElementById("plusRadio");
var minusChecked = document.getElementById("minusRadio");
var multiplyChecked = document.getElementById("multiplyRadio");
var divideChecked = document.getElementById("divideRadio");
var updateResult = document.getElementById("answerField");

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
    
    // if (plusChecked.checked){
    //     updateResult.value = functions.add(input1.value, input2.value);
    // }if (minusChecked.checked){
    //     updateResult.value = functions.subtract(input1.value, input2.value);
    // }
    // if (multiplyChecked.checked){
    //     updateResult.value = functions.multiply(input1.value, input2.value);
    // }
    // else if (divideChecked.checked){
    //     updateResult.value = functions.divide(input1.value, input2.value);
    // }    
});

//Size
idNumber.addEventListener('change', (() => {
    idNumberSize.textContent = functions.size(idNumber.value);
}));
