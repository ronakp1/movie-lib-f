const { Router } = require('express');
const passport = require('passport');
const jwt = require('jsonwebtoken');
const authController = require('../Controllers/authController.js');
// const favouriteController = require('../Controllers/FavouriteController');

const router = Router();

router.post('/signup', authController.signup_post);
router.post('/login', passport.authenticate('local', { session: false }), authController.signup_login);
router.get('/logout',  passport.authenticate('jwt', { session: false }), authController.signup_logout);
router.get('/authenticated',  passport.authenticate('jwt', { session: false }), authController.signup_authenticated);
// router.post('/favourites',  passport.authenticate('jwt', { session: false }), favouriteController.post_favourites);

module.exports = router;