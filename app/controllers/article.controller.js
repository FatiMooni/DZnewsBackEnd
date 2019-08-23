const Article = require('../models/article.model.js')

// Retrieve and return all articles from the database.
exports.findAll = (req, res) => {
    Article.find()
    .then(Article => {
        res.send(Article);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving articles."
        });
    });
};