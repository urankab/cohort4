import functions from './functions.js';
import calculatorFunctions from './calculator.js'
import taxFunc from './taxes.js'

// Add the event listeners

//TAXES------------------------------------------------------------

const onPressTax = document.getElementById("taxBtn");
const updateResultTax = document.getElementById("taxField");
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
