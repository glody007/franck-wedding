const createLink = (name) => {
    return ``
}

/**
 * Create table rows and add them to the table
 * @param {List} invitations 
 * @returns 
 */
const addDatasToTable = (invitations) => {
    const fragment = document.createDocumentFragment()
    for (const [key, invitation] of Object.entries(invitations)) {
        const tr = document.createElement('tr')
        tr.innerHTML = `
            <td>${invitation.name}</td>
            <td>${invitation.table}</td>
            <td><a href='https://franck-gesmie.herokuapp.com/invitations/${invitation.name}'>Lien pour ${invitation.name}</td>
        `
        fragment.appendChild(tr)
    }
    const table = document.querySelector('table')
    table.appendChild(fragment)
    return fragment
}

/**
 * Get all list of invitations and create table
 * with name, table and link
 */
 const getAllInvitations = async () => {
    const response = await fetch('/invitations/datas', {
        method: 'GET',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json'
        }
    })
    try {
        const data = await response.json()
        addDatasToTable(data)
    } catch (error) {
        console.log(error.data)
    }
} 

(() => {
    getAllInvitations()
})()