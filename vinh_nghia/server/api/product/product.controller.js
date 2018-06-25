const product = require('./product.model');

exports.getAll = (req, res) => {
    product.findAll({ raw: true }).then(data => {
        res.json(data);
    })
}

exports.create = (req, res) => {
    product.create({
        category: req.body.category,
        subcategory: req.body.subcategory,
        name: req.body.name,
        cost: req.body.cost,
        stars: req.body.stars,
        image: req.body.image
    }).then(product => {
        res.json(product);
    })
}

exports.delete = (req, res) => {
    product.destroy({ where: { name: req.body.name } }).then((product => {
        res.json('delete success');
    }))
}

exports.findByName = (req, res) => {
    console.log(req.body);
    product.findOne({ where: { name: req.body.name } }).then((product) => {
        console.log(req.body + 'aaaaaaaaaaaaa');
        res.json(product);
    })
}

exports.findAllByCate = (req, res) => {
    product.findAll({ where: { category: req.body.category, subcategory: req.body.subcategory } }).then(listPro => {
        res.json(listPro);
    })
}

