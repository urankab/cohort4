const calculatorFunc = {
    add: (num1, num2) => {
        var answer = Number(num1) + Number(num2);
        return answer;
    },

    subtract: (num1, num2) => {
        var answer = num1 - num2;
        return answer;
    },

    multiply: (num1, num2) => {
        var answer = num1 * num2;
        return answer;
    },

    divide: (num1, num2) => {
        var answer = num1 / num2;
        return answer;
    },   

    empty: () =>{
        return "Please enter some values";
    }, 
}

export default calculatorFunc;