const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')

const app = express()

app.use(express.static('src/client'))

app.get('/', function (req, res) {
    // res.sendFile('dist/index.html')
    res.sendFile(path.resolve('src/client/index.html'))
})

app.listen(8000, () => {
    console.log('Server is listening at port 8000')
})