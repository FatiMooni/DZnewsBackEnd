const express = require('express');
const bodyParser = require('body-parser');

require('dotenv').config()

// Configuring the database
const dbConfig = require('./config/database.config.js');
const mongoose = require('mongoose');



// create express app
const app = express();

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))

// parse requests of content-type - application/json
app.use(bodyParser.json())

//add the routes
require('./app/routes/article.routes.js')(app);
require('./app/routes/category.routes.js')(app);
require('./app/routes/user.routes.js')(app);


// define a simple route
app.get('/', (req, res) => {
    res.json({"message": "Welcome to DZ-News API application. Find your latest news"});
});

const port = process.env.PORT || 3000;

// listen for requests
app.listen(port, () => { 
    console.log("Server is listening on port $port");
});

mongoose.Promise = global.Promise

//Connect to mongoDB
mongoose.connect(process.env.MONGODB_URI||dbConfig.url , {
  useNewUrlParser : true}).then(() => {
     console.log("connected to database succesfully");
  }).catch (err => {
     console.log("there is a problem somewhere", err);
     process.exit();
  });