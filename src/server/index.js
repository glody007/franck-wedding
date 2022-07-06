const express = require('express')
const path = require('path')
const cors = require('cors')
const bodyParser = require('body-parser')
const mockApiResponse = require('./mockApi')

const app = express()

app.use(express.static('src/client'))

app.get('/invitations', function (req, res) {
    res.send(mockApiResponse)
})

app.get('/invitations/:name', function (req, res) {
    const invitation = mockApiResponse[req.params['name']]
    if(invitation) {
        res.sendFile(path.resolve('src/client/index.html'))
    } else {
        res.send('Invitation not found')
    }
})

const port = process.env.PORT || 8080;

app.listen(port, () => {
    console.log('Server is listening at port ' + port)
})