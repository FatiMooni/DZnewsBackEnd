const mongoose = require('mongoose');

const ArticleSchema = mongoose.Schema({
    userID : String,
    articleID : Sreing ,
    title: String,
    categoryId : String,
    uri : String,
    img : String
}, {
    timestamps: true
});

module.exports = mongoose.model('Article', ArticleSchema);