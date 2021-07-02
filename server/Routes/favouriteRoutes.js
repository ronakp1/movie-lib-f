const { Router } = require('express');
const passport = require('passport');
const jwt = require('jsonwebtoken');
const favouriteController = require('../Controllers/FavouriteController');

const router = Router();

router.post('/favourite',  passport.authenticate('jwt', { session: false }), favouriteController.post_favourites);
router.post('/favourite/favourited',  passport.authenticate('jwt', { session: false }), favouriteController.post_checkFavourite);
router.post('/favourite/removeFavourite',  passport.authenticate('jwt', { session: false }), favouriteController.post_removeFavourite);
router.get('/favourite/getFavourite',  passport.authenticate('jwt', { session: false }), favouriteController.post_getFavourite);
module.exports = router;