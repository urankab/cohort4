let provinces = {
    AB: "Alberta",
    BC: "British Columbia",
    MB: "Manitoba",
    NB: "New Brunswick",
    NL: "Newfoundland and Labrador",
    NS: "Nova Scotia",
    NT: "Northwest Territories",
    NU: "Nunavet",
    ON: "Ontario",
    PE: "Prince Edward Island",
    QC: "Quebec",
    SK: "Saskatchewan",
    YT: "Yukon"
};

const dictionaryFunc = {
    getProvince: (key) => {
        return provinces[key];
    },
}

export default dictionaryFunc;