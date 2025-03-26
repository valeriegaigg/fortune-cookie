const fortune = require('./fortunes.json')

const getFortune = () => {
    return fortune[Math.floor(Math.random() * 10)]
}

module.exports = getFortune

