const express = require('express')
const path = require('path')
const cors = require('cors')
const bodyParser = require('body-parser')
const mockApiResponse = require('./mockApi')

const app = express()

app.use(express.static('src/client'))

// Here we are configuring express to use body-parser as middle-ware.
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

// Cors for cross origin allowance
app.use(cors());

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

app.get('/invitations/datas/:name', function (req, res) {
    const invitation = mockApiResponse[req.params['name']]
    if(invitation) {
        res.send(invitation)
    } else {
        res.status(404).send('Invitation not found');
    }
})

const port = process.env.PORT || 8080;

app.listen(port, () => {
    console.log('Server is listening at port ' + port)
})