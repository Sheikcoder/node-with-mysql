const models  = require('../models');
const bcryptjs = require('bcryptjs');
const jwt = require('jsonwebtoken');
const Validator = require('fastest-validator');



function signup(req, res) {

  //validation 
  const schema = {
    username: { type: "string", optional: false, max: "100" },
    email: { type: "string", optional: false, max: "100" },
    password: { type: "string", optional: false, max: "100" },
  };

  const v = new Validator();
  const validationResponse = v.validate(req.body, schema);

  if (validationResponse !== true) {
    return res.status(400).json({
      message: "Validation Failed",
      error: validationResponse,
    });
  }

  //sign-up function

  models.user.findOne({ where: { email: req.body.email } }).then((result) => {
    if (result) {
      return res.status(409).json({
        message: "Email already exists..!",
      });
    } else {
      bcryptjs.genSalt(10, function (err, salt) {
        bcryptjs.hash(req.body.password, salt, function (err, hash) {
          const user = {
            name: req.body.username,
            email: req.body.email,
            password: hash,
          };

          models.user
            .create(user)
            .then((result) => {
              res.status(201).json({
                message: "User created successfully",
                post: result,
              });
            })
            .catch((error) => {
              res.status(500).json({
                message: "User not added",
                error: error,
              });
            });
        });
      });
    }
  }).catch((error) => {
    res.status(500).json({
      message: "User not added",
      error: error,
    });
  });
}


function login(req, res) {

  //validation 
  const schema = {
    email: { type: "string", optional: false, max: "100" },
    password: { type: "string", optional: false, max: "100" },
  };

  const v = new Validator();
  const validationResponce = v.validate(req.body, schema);

  if (validationResponce !== true) {
    return res.status(400).json({
      message: "Validation Failed",
      error: validationResponce,
    });
  }

  //login function
  models.user.findOne({ where: { email: req.body.email } }).then((user) => {
    if (user === null) {
      return res.status(500).json({
        message: "User Credential invalid",
      });
    } else {
      bcryptjs.compare(req.body.password, user.password, function (err, result) {
        if (result) {
          const token = jwt.sign(
            {
              email: user.email,
              userId: user.id,
            },
            "secret",
            function (err, token) {
              res.status(200).json({
                message: "Login successfully",
                token: token,
              });
            }
          );
        } else {
          res.status(500).json({
            message: "Login Unsuccessfully Sorry",
          });
        }
      });
    }
  }).catch(err => {
    res.status(500).json({
      message: "something went wrong!",
    });
  });
}



module.exports = {
    signup: signup,
    login: login
  };
  