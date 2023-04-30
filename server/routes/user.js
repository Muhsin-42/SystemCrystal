const router = require('express').Router();

const usersController = require('../controllers/userController');

router.route('/review')
    .post(usersController.postReview)
    .get(usersController.getReviews)

module.exports =  router;