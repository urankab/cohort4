let array = [];

const arraysFunc = {

    addItem: (num) => {
        array.push(num);
        return num + " has been added";
    },

    showArray: (displayArray) => {
        displayArray = array.join(', ');
        // displayArray = array.toString();
        // let newString = String(array);
        // return newString;
        return displayArray;
    },

    totalOfArray: (total) => {
        total = eval(array.join('+'));
        return total;
    },

    clearArray: () => {
        return array = [];
    }
}

export default arraysFunc;