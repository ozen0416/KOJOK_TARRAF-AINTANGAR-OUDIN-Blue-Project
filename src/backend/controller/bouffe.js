const data = require('../data.json')

exports.getData = (req, res) => {
    const meal = data.aliments
    if (!meal) {
        res.status(404).send('Not Found')
    }
    res.json(meal)
}