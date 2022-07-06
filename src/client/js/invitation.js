
const DETAILS = 'Details'
const INVITATION = 'Invitation'

/**
 * Return the last part of url(the string after the last slash)
 */
const getInvitationNameFromUrl = () => {
    const url = document.URL
    const urlParts = url.split('/')
    return urlParts[urlParts.length - 1]
}

/**
 * Get invitation data from part in url
 * and add set name and table
 */
 const getInvitationData = async () => {
    const invitationName = getInvitationNameFromUrl()
    const response = await fetch(`/invitations/datas/${invitationName}`, {
        method: 'GET',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json'
        }
    })
    try {
        const data = await response.json()
        const name = document.getElementById('name')
        const table = document.getElementById('table')
        name.innerText = data['name']
        table.innerText = data['table']
    } catch (error) {
        console.log(error.data)
    }
}

/**
 * Change text and color of button
 * @param {HtmlElement} button 
 */
const changeButtonDetails = (button) => {
    if(button.innerText === DETAILS) {
        button.innerText = INVITATION
        button.style.backgroundColor =  "#f59042"
    } else {
        button.innerText = DETAILS
        button.style.backgroundColor =  "white"
    }
}

/**
 * Add click listener to button, for showing or hidding details
 */
const addDetailsListener = () => {
    const button = document.getElementById('details-button')
    button.addEventListener('click', () => {
        const detailsContent = document.getElementById('details-content')
        const mainContent = document.getElementById('main-content')
        detailsContent.classList.toggle('hide')
        mainContent.classList.toggle('hide')
        changeButtonDetails(button)
    })
}

(() => {
    getInvitationData()
    addDetailsListener()
})()
