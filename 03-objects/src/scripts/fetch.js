const functions = {
    getFirstName(data) {
        return data[0].name;
    },

    getAllFirstNames(data) {
        return data.map((f) => f.name);
    }
}

export default functions;