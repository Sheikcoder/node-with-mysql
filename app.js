const express = require('express');
const bodyParser = require('body-parser');
const postsRoutes = require('./routes/posts');
const userRoutes = require('./routes/user');
const imageRoutes = require('./routes/images');
const testRoutes = require ('./routes/test');
const countRoutes = require ('./routes/count');

const app = express();

app.use(bodyParser.urlencoded({ extended: true })); //predefind api import
app.use(bodyParser.json());
app.use("/images", express.static('uploades'));
app.use("/posts", postsRoutes);
app.use("/user" , userRoutes);
app.use("/file" , imageRoutes);
app.use ("/test",testRoutes );
app.use ("/count",countRoutes );

app.use(express.json());

module.exports = app;

