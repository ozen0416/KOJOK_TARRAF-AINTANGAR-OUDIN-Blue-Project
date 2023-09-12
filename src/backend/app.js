const express = require('express')
const app = express()

const port = 3000;

const cors = require('cors')
app.use(cors({
    origin :'*'
}))

const route = require('./routes/nourriture')

app.use(route)

app.listen(port, () => console.log(`Server is listening on port ${port}`))