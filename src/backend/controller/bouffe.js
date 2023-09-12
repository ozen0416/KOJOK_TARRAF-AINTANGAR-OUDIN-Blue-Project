const data = require("../data.json")

exports.getData = (req, res) => {
    const meal = data.aliments
    if (!meal) {
        res.status(404).send('Not Found')
    }
    res.json(meal)
}

exports.getDatabyId = (req, res) => {
    const mealbyId = parseInt(req.params.id)
    const meal = data.aliments
    const plats = meal.find(s => s.id == mealbyId)
    if (!plats) {
        res.status(404).send('?')
    }
    res.status(200).json({
        message : "trouvé",
        plats
    })
}