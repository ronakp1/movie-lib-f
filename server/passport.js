const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const JwtStrategy = require('passport-jwt').Strategy;
const User = require('./models/user');

const cookieExtractor = req => {
    let token = null;
    if (req && req.cookies) {
        token = req.cookies["access_token"];
    }
    return token;
}

passport.use(new JwtStrategy({
    jwtFromRequest: cookieExtractor,
    secretOrKey: "Hey22"
}, (payload, done) => {
    User.findById({ _id: payload.sub},(err, user) => {
        if (err)
            return done(err, false); 
        if (user)
            return done(null, user);
        else
            return done(null, false);
    });
}));

passport.use(new LocalStrategy(
    function (username, password, done) {
        User.findOne({ username }, function (err, user) {
            if (err) { return done(err); }
            if (!user) { return done(null, false); }
            user.comparePasswords(password, done);
        });
    }
));