const User = require('../models/user.model.js')

// Create and Save a new article
exports.create = (req, res) => {

    // Validate request
    if(!req.body.userID) {
        return res.status(400).send({
            message: "user id can not be empty"
        });
    }

    // Create a Note
    const user = new User({
        userID : req.body.userID
    });

User.find(user.userID)
    .then( userFound => {
        if(!userFound) {
              // Save the user if not found
                user.save()
                .then(data => {
                    res.send(data);
                }).catch(err => {
                    res.status(500).send({
                        message: err.message || "Some error occurred while creating the user."
                    });
                });
        } else {
            return res.status(200).send({
                message: "user with id " + req.body.userID + "already exist"
            });
        }
    });
   
};

