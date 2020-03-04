const taxFunc = {
    getIncomeTax: (salary) => { //WORKS
        if (salary <= 48535 && salary > 0) {
            const tax1 = salary * 0.15; //Apply 15% tax to salary
            const income = salary - tax1; //Net income after tax deduction
            return income;
        }
        if (salary > 48535 && salary <= 97069) { //WORKS
            const bracket2 = salary - 48535; //Get the leftover after the first tax bracket
            const b2Deduct = bracket2 * 0.205; //Apply 20.5% to leftover
            const b1Deduct = 7280.25; //Apply 15% tax to first tax bracket
            const totalTax = b1Deduct + b2Deduct; //Add total taxes from the 15% and 20.5%
            const income = salary - totalTax; //Income = salary - taxes
            return income;
        }
        if (salary > 97069 && salary <= 150473){ //WORKS
            const bracket3 = salary - 97069; //Amount that will be taxed 26%
            const b3Deduct = bracket3 * 0.26; //Apply 26% tax, returns
            const b2Deduct = 9949.47; //Amount deducted from $48,534 - $97,069 bracket (20.5%)
            const b1Deduct = 7280.25; //Amount deducted from $48,535 or less (15%)
            const totalTax = b3Deduct+b2Deduct+b1Deduct;
            const income = salary - totalTax;
            return income;
        }

        if (salary > 150473 && salary <= 214368){ //WORKS
            const bracket4 = salary - 150473; //Amount that will be taxed 29%
            const b4Deduct = bracket4 * 0.29; //Apply 29% tax
            const b3Deduct = 13885.04; //Amount deducted from $97,069 - $150,473 bracket (26%)
            const b2Deduct = 9949.47; //Amount deducted from $48,534 - $97,069 bracket (20.5%)
            const b1Deduct = 7280.25; //Amount deducted from $48,535 or less (15%)
            const totalTax = b4Deduct+b3Deduct+b2Deduct+b1Deduct;
            const income = salary - totalTax;
            return income;
        }

        if (salary > 214368){
            const bracket5 = salary - 214368; //Amount that will be taxed 33%
            const b5Deduct = bracket5 * 0.33; //Apply 33% tax (returns $11, 758.56)
            const b4Deduct = 18529.55; //Amount deducted from $150,473 - $214,368 bracket; (29%)
            const b3Deduct = 13885.04; //Amount deducted from $97,069 - $150,473 bracket (26%)
            const b2Deduct = 9949.47; //Amount deducted from $48,534 - $97,069 bracket (20.5%)
            const b1Deduct = 7280.25; //Amount deducted from $48,535 or less (15%)
            const totalTax = b5Deduct+b4Deduct+b3Deduct+b2Deduct+b1Deduct;
            const income = salary - totalTax;
            return income;
        }

        if (salary != Number){
            return "Please enter your income"
        }
    },
}

export default taxFunc;