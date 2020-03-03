const functions = {
    // //TAXES----------------------------------
    // addString: () =>{
    //     console.log("Testing");
    // },
    
    // getTaxAmount: (salary) => {
    //     if (salary <= 48535) {
    //         var tax = salary * 0.15;
    //         var income = salary - tax;
    //         return income;
    //     }
    //     else if (salary > 48535 && salary <= 97069) {
    //         var tax2 = salary - 48535;
    //         var higherTax = tax2 * 0.205;
    //         var tax1 = 48535 * .15;
    //         var tax = higherTax + tax1;
    //         income =  salary - tax;
    //         return income;
    //     }//else if (salary > 97069 && salary <= 150473) {
    //     //     var tax = salary * 0.26
    //     //     return salary + tax;
    //     // } else if (salary > 150473 && salary <= 214368) {
    //     //     var tax = salary * 0.29
    //     //     return salary + tax;
    //     // } else if (salary >= 214368) {
    //     //     var tax = salary * 0.33
    //     //     return salary + tax;
    //     // }
    // },
    
    //SIZE---------------------------------
    size: (num) => {
        if (num < 10) return "small";
        if (num < 20) return "medium";
        if (num < 100) return "large";
        return "extra large";
    },

    isEven: (num) => {
        if (num % 2 == 0) {
            return true;
        } else return false;
    }
};

export default functions;