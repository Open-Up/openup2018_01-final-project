const db = require('../../config/database.connect')
const sequelize = require('sequelize')

const product = db.define('product', {
    category: sequelize.STRING,
    subcategory: sequelize.STRING,
    name: sequelize.STRING,
    cost: sequelize.INTEGER,
    stars: sequelize.INTEGER,
    image: sequelize.STRING
})
db.sync();

module.exports = product;