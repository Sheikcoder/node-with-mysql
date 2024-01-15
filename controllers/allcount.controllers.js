const models = require('../models');

function getAllCounts(req, res) {
  const postCountPromise = models.post.count();
  const categoriesCountPromise = models.categories.count();
  const addressCountPromise = models.address.count();

  Promise.all([postCountPromise, categoriesCountPromise, addressCountPromise])
    .then(counts => {
      const [postCount, categoriesCount, addressCount] = counts;

      res.status(200).json({
        message: 'Total counts retrieved successfully',
        counts: {
          post: postCount,
          categories: categoriesCount,
          address: addressCount,
        },
      });
    })
    .catch(error => {
      res.status(500).json({
        message: 'Error retrieving counts',
        error: error,
      });
    });
}

module.exports = {
  getAllCounts: getAllCounts,
};
