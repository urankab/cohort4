//TAXES----------------------------------
const taxFunc = {
    getIncomeTax: (salary) => {
        if (salary <= 48535 && salary > 0) {
            var tax1 = salary * 0.15; //Apply 15% tax to salary
            var income = salary - tax1; //Net income after tax deduction
            return income;
        }
        if (salary > 48535 && salary <= 97069) {
            var bracket2 = salary - 48535; //Get the leftover after the first tax bracket
            var b2Deduct = bracket2 * 0.205; //Apply 20.5% to leftover
            var b1Deduct = 7280.25; //Apply 15% tax to first tax bracket
            var totalTax = b1Deduct + b2Deduct; //Add total taxes from the 15% and 20.5%
            var income = salary - totalTax; //Income = salary - taxes
            return income;
        }
        if (salary > 97069 && salary <= 150473){
            var bracket3 = salary - 67069; //Amount that will be taxed 26%
            var b3Deduct = bracket3 * 0.26; //Apply 26% tax, returns $8,042.06
            b2Deduct = 9949.47;
            income = salary - totalTax;
            return bracket3;
        }

        if (salary > 150473 && salary <= 214368){
            return tax1;
        }

        if (salary > 214368){
            return true;
        }
    },

    empty: () => {
        return "Please enter your income";
    }
}

// getTaxAmount: (salary) => {
//     switch (salary != "") {
//         case (salary <= 48535):
//             var tax = salary * 0.15;
//             var income = salary - tax;
//             return income;
//             break;
//         case (salary > 48535 && salary <= 97069):
//             var tax2 = salary - 48535;
//             var higherTax = tax2 * 0.205;
//             var tax1 = 48535 * .15;
//             var tax = higherTax + tax1;
//             income = salary - tax;
//             return income;
//             break;
//         //else if (salary > 97069 && salary <= 150473) {
//         //     var tax = salary * 0.26
//         //     return salary + tax;
//         // } else if (salary > 150473 && salary <= 214368) {
//         //     var tax = salary * 0.29
//         //     return salary + tax;
//         // } else if (salary >= 214368) {
//         //     var tax = salary * 0.33
//         //     return salary + tax;
//         // }
//         default: return "Please enter your income";
//     }
// }


export default taxFunc;