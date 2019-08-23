const mongoose = require('mongoose');

const ArticleSchema = mongoose.Schema({
    id : String,
    title: String,
    theme : String,
    author : String,
    content: String
}, {
    timestamps: true
});

module.exports = mongoose.model('Article', ArticleSchema);