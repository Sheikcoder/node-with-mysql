const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const postsRoutes = require('./routes/posts');
app.use(bodyParser.urlencoded({ extended: true })); //predefind api import
app.use(bodyParser.json());

app.use("/posts", postsRoutes);

app.use(express.json());
module.exports = app;

