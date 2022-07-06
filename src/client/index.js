/**
 * Get data from api
 * @param {String} url 
 */
 const getData = async (url) => {
    const response = await fetch(url, {
        method: 'GET',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json'
        }
    })
    try {
        const data = await response.json()
        console.log(data)
    } catch (error) {
        console.log(error.data)
    }
}

const main = () => {
    getData('/invitations/datas/franck')
    getData('/invitations')
}

main()