
const models  = require('../models');

function getPostCount(req, res) {
    models.post.count()
      .then(count => {
        res.status(200).json({
          message: 'Total post count retrieved successfully',
          count: count,
        });
      })
      .catch(error => {
        res.status(500).json({
          message: 'Error retrieving post count',
          error: error,
        });
      });
  }

  function getcategoriesCount(req, res) {
    models.categories.count()
      .then(count => {
        res.status(200).json({
          message: 'Total post count retrieved successfully',
          count: count,
        });
      })
      .catch(error => {
        res.status(500).json({
          message: 'Error retrieving post count',
          error: error,
        });
      });
  }

  function getaddressCount(req, res) {
    models.address.count()
      .then(count => {
        res.status(200).json({
          message: 'Total post count retrieved successfully',
          count: count,
        });
      })
      .catch(error => {
        res.status(500).json({
          message: 'Error retrieving post count',
          error: error,
        });
      });
  }

  module.exports = {
    getPostCount: getPostCount,
    getcategoriesCount: getcategoriesCount,
    getaddressCount: getaddressCount,
  };