const Article = require('../models/article.model.js')
const Users = require('../models/user.model.js')
const User = require('../models/user.model.js')

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
        articleID : req.body.articleID,
        categoryID :req.body.categoryID,
        uri : req.body.uri
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
    Article.findById(req.params.id)
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
            message: "Error retrieving article with id " + req.params.id
        });
    });
};

exports.delete = (req, res) => {
    //User.   req.params.id
    Article.findOneAndRemove({uri :req.params.uri})
    .then(article => {
        if(!article) {
            return res.status(404).send({
                message: "article not found with uri " + req.params.uri
            });
        }
        res.send({message: "article deleted successfully!"});
    }).catch(err => {
        if(err.kind === 'ObjectId' || err.name === 'NotFound') {
            return res.status(404).send({
                message: "article not found with uri " + req.params.uri
            });                
        }
        return res.status(500).send({
            message: "Could not delete article with uri " + req.params.uri
        });
    });
};

// Create and Save a new article
exports.addArticle = (req, res) => {
    
    //verify if user exist
    Users.findOne({userID : req.params.id})
      .then( user => {
         // Validate request
         if(user){
    if(!req.body.uri) {
        return res.status(400).send({
            message: "article uri can not be empty"
        });
    }

    // Create an article
    const article = new Article({
        userID : user.userID,
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
} else {
    return res.status(404).send({
        message: "user with id " + req.params.id + " not found haha"
    });
}
}).catch(err => {
    return res.status(404).send({
        message: "user with id " + req.params.id + " not found" + err
    });  
});
    
};

exports.findAllForUser = (req, res) => {
    Article.find({userID : req.params.id})
    .then(Article => {
        res.send(Article);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving articles."
        });
    });
};