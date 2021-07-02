const { Router } = require('express');
const passport = require('passport');
const jwt = require('jsonwebtoken');
const commentController = require('../Controllers/CommentController');

const router = Router();

router.post('/comment/submit',  passport.authenticate('jwt', { session: false }), commentController.post_comment);
router.post('/comment/getComments',  passport.authenticate('jwt', { session: false }), commentController.post_getComments);
module.exports = router;