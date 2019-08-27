const Category = require("../models/category.model")

exports.findAll = (req, res) => {
    Category.find()
    .then(Category => {
        res.send( Category);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving categories."
        });
    });
};

// Create and Save a new category
exports.create = (req, res) => {
    // Validate request
    if(!req.body.title) {
        return res.status(400).send({
            message: "category uri can not be empty"
        });
    }

    // Create a Category
    const category = new Category({
        title: req.body.title, 
        img : req.body.img,
        feeds : req.body.feeds
    });

    // Save category
    category.save()
    .then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while creating the category"
        });
    });
};

exports.findOne = (req, res) => {
    Category.findById(req.params.id)
    .then(category => {
        if(!category) {
            return res.status(404).send({
                message: "Category not found with id " + req.params.id
            });            
        }
        res.send(category);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "Category not found with id " + req.params.id
            });                
        }
        return res.status(500).send({
            message: "Error retrieving category with id " + req.params.id
        });
    });
};

exports.delete = (req, res) => {
    Category.findByIdAndRemove(req.params.id)
    .then(category => {
        if(!category) {
            return res.status(404).send({
                message: "category not found with id " + req.params.id
            });
        }
        res.send({message: "category deleted successfully!"});
    }).catch(err => {
        if(err.kind === 'ObjectId' || err.name === 'NotFound') {
            return res.status(404).send({
                message: "category not found with id " + req.params.id
            });                
        }
        return res.status(500).send({
            message: "Could not delete category with id " + req.params.id
        });
    });
};