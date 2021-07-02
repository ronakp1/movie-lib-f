const User = require('../models/user');
const jwt = require('jsonwebtoken');
const passport = require('passport');
const passportConfig = require('../passport');

const signToken = (id) => {
    return jwt.sign({ 
        iss: "Hey22",
        sub: id
    }, "Hey22", {expiresIn: "1h"});
}

const signup_post = (req, res) => {
    console.log(req.body);
    const { username, password } = req.body;

    User.findOne({ username }, (err, user) => {
        if (err)
            res.status(500).json({ message: { msgBody: "Enter a valid username & password over 6 characters", msgError: true } })
        if (user)
            res.status(400).json({ message: { msgBody: "Username is already taken", msgError: true } })
        else {
            const newUser =  new User({ username, password });
            newUser.save(err => {
                if (err)
                    res.status(500).json({ message: { msgBody: "Enter a valid username & password over 6 characters", msgError: true } })
                else {
                    res.status(201).json({ message: { msgBody: "Account succesfully created", msgError: false } })
                }
            })
        }
    })
}

const signup_login = (req, res) => {
    if (req.isAuthenticated()) {
        console.log("hey");
        const { _id, username } = req.user;
        const token = signToken(_id);
        res.cookie('access_token', token, {httpOnly: true, sameSite:true});
        res.status(200).json({isAuthenticated : true, user : {username}})
    }
}

const signup_logout = (req, res) => {
   res.clearCookie('access_token');
   res.json({user:{username: ''}, success:true});
}

const signup_authenticated = (req, res) => {
    const {username} =req.user;
    res.status(200).json({isAuthenticated : true, user : {username}});
 }
 
module.exports = {
    signup_post, signup_login, signup_logout, signup_authenticated
}