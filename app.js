const express = require('express');
const bodyParser = require('body-parser');
const postsRoutes = require('./routes/posts');
const userRoutes = require('./routes/user');
const imageRoutes = require('./routes/images')

const app = express();

app.use(bodyParser.urlencoded({ extended: true })); //predefind api import
app.use(bodyParser.json());
app.use("/images", express.static('uploades'));
app.use("/posts", postsRoutes);
app.use("/user" , userRoutes);
app.use("/image" , imageRoutes);

app.use(express.json());

module.exports = app;

