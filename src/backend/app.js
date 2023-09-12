const express = require('express')()
const app = express

const port = 3000;

const cors = require('cors')
app.use(cors({
    origin :'*'
}))

app.get('/', (req,res) => {
    res.send("oui")
} );

app.listen(port, () => console.log(`Server is listening on port ${port}`))