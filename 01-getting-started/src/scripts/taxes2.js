const taxFunc = {
    getTaxAmount: (salary) => { 
        if (salary <= 48535 && salary > 0) {
            const taxAmount = salary * 0.15;
            return Number(taxAmount.toFixed(2));
        }

        if (salary > 48535 && salary <= 97069) { 
            const taxAmount = (((salary-48535)*.205)+7280.25);
            return Number(taxAmount.toFixed(2));
        }

        if (salary > 97069 && salary <= 150473){ 
            const taxAmount = (((salary-97069)*.26)+17229.72);
            return Number(taxAmount.toFixed(2));
        }

        if (salary > 150473 && salary <= 214368){ 
            const taxAmount = (((salary-150473)*.29)+31114.76);
            return Number(taxAmount.toFixed(2));
        }

        if (salary > 214368){
            const taxAmount = (((salary-214368)*.33)+49644.31);
            return Number(taxAmount.toFixed(2));
        }

        if (salary != Number){
            return "Please enter your income"
        }
    }
}

export default taxFunc;