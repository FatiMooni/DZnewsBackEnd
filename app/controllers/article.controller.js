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
    if(!req.body.uri) {
        return res.status(400).send({
            message: "article uri can not be empty"
        });
    }

    // Create a Note
    const article = new Article({
        title: req.body.title || "Untitled Article", 
        theme : req.body.theme,
        resume : req.body.resume,
        author : req.body.author,
        date : req.body.date,
        uri : req.body.uri,
        img : req.body.img
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

exports.findOne = (req, res) => {
    Note.findById(req.params.id)
    .then(article => {
        if(!article) {
            return res.status(404).send({
                message: "Article not found with id " + req.params.id
            });            
        }
        res.send(article);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "Article not found with id " + req.params.id
            });                
        }
        return res.status(500).send({
            message: "Error retrieving note with id " + req.params.id
        });
    });
};