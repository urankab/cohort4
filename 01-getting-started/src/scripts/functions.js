const functions = {

    //SIZE---------------------------------
    size: (num) => {
        if (num < 10) return "small";
        if (num < 20) return "medium";
        if (num < 100) return "large";
        if (num > 100) return "extra large";
    },

    isEven: (num) => {
        if (num % 2 == 0) {
            return true;
        } else return false;
    }
};

export default functions;