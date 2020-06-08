async function getElephant() {
        const proxyurl = 'https://cors-anywhere.herokuapp.com/'
        const url = 'https://elephant-api.herokuapp.com/elephants/random'
        fetch(proxyurl + url)
            .then((resp) => { return resp.json() })
            .then((data) => {
                data.forEach((elephant) => {
                    const { name, sex, species, note, id } = elephant
                    document.getElementById('name').value = name
                    document.getElementById('gender').value = sex
                    document.getElementById('species').value = species
                    document.getElementById('about').value = note
                })
            })
        .catch(()=> console.log("Can't access " + url + " blocked?"))
}

export default getElephant