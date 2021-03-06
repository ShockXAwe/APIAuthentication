const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
mongoose.set('useCreateIndex', true);
mongoose.connect("mongodb://localhost/APIAuthentication", {useNewUrlParser: true});;

const app = express();

// Middlewares
app.use(morgan('dev'));
app.use(bodyParser.json());

//Routes
app.use('/users', require('./routes/users'));

// Start server
const port = process.env.PORT || 3000;
app.listen(port);
console.log( `Server starting at ${port}`);
