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

// Create and Save a new article
exports.create = (req, res) => {
    // Validate request
    if(!req.body.content) {
        return res.status(400).send({
            message: "article content can not be empty"
        });
    }

    // Create a Note
    const article = new article({
        title: req.body.title || "Untitled Article", 
        id : req.body.id,
        theme : req.body.theme,
        resume : req.body.resume,
        author : req.body.author,
        date : req.body.date,
        uri : req.body.uri,
        content: req.body.content
    });

    // Save Note in the database
    article.save()
    .then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while creating the article."
        });
    });
};