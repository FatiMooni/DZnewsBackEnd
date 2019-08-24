const mongoose = require('mongoose');

const ArticleSchema = mongoose.Schema({
    id : String,
    title: String,
    theme : String,
    resume : String,
    author : String,
    date : String,
    uri : String,
    img : String
}, {
    timestamps: true
});

module.exports = mongoose.model('Article', ArticleSchema);