const express = require('express');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');
const config = require('../config/database');

const User = require('../models/user');

//Register Route
router.post('/register', (req, res) => {
    let newUser = new User({
        name: req.body.name,
        email: req.body.email,
        username: req.body.username,
        password: req.body.password
    });

    User.addUser(newUser, (err, user) => {
        if (err) {
            res.json({
                success: false,
                message: "Failed to register. Error - " + err
            });
        } else {
            res.json({
                success: true,
                message: "User successfully registered"
            })
        }
    })
})

//Authenticate Route
router.post('/authenticate', (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    User.getUserByUsername(username, (err, user) => {
        if (err) {
            throw err;
        }

        if (!user) {
            return res.json({
                success: false,
                message: "No user has been found with that username"
            })
        }

        User.comparePassword(password, user.password, (err, isMatch) => {
            if (err) {
                console.log("an error happened whilst comparing");
                throw err;
            }

            if (isMatch) {
                const token = jwt.sign(user, config.secret, {
                    expiresIn: 604800 //1 Week
                });

                res.json({
                    success: true,
                    token: 'JWT ' + token,
                    user: {
                        id: user._id,
                        name: user.name,
                        username: user.username,
                        email: user.email
                    }
                })
            } else {
                res.json({
                    success: false,
                    message: "The password did not match the user on record"
                })
            }
        })
    })
})

// Settings Route
router.get('/settings', passport.authenticate('jwt', {session: false}), (req, res) => {
    res.json({
        user: req.user
    })
})

module.exports = router;