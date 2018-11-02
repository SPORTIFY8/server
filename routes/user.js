const router = require('express').Router()
const jwt = require('jsonwebtoken');
require('dotenv').config();
const { OAuth2Client } = require('google-auth-library');
const client = new OAuth2Client(process.env.CLIENT_ID);
const User = require('../models/user.js')
const crypto = require("crypto");
router.post('/signin', (req, res) => {
    client.verifyIdToken({
        idToken: req.body.gtoken,
        audience: process.env.CLIENT_ID
    }, function(err, result) {
        if (err) {
            console.log(err)
        } else {
            const payload = result.getPayload(); //udah bisa dapet name sama Email
            const userid = payload['sub'];
            User.findOne({ email: payload.email })
                .then(function(data) {
                    let obj = {
                        email: payload.email
                    }
                    let token = jwt.sign(obj, process.env.JWT_SECRET);
                    if (data) {
                        res.json(token)
                    } else {
                        User.create({
                                email: payload.email,
                                password: null,
                                oauth: true
                            })
                            .then(function() {
                                res.json(token)
                            })
                    }
                })
                .catch(function(err) {
                    res.status(500).json(err.message)
                })

        }
    });
})
router.post('/login', function(req, res) {
    User.findOne({ email: req.body.email })
        .then(function(data) {
            if (data) {
                let obj = {
                    email: req.body.email
                }
                let pass = crypto.createHmac('sha256', data.salt).update(req.body.password).digest('hex')
                if (data.password === pass) {
                    let token = jwt.sign(obj, process.env.JWT_SECRET);
                    res.status(200).json({
                        token: token
                    })
                } else {
                    res.status(400).json({
                        message: `Incorrect password`
                    })
                }
            } else {
                res.status(400).json({
                    message: `Email Already Taken`
                })
            }
        })
        .catch(function(err) {
            res.status(400).json({
                message: err.message
            })
        })
})
router.post('/register', function(req, res) {
    let _salt = crypto.randomBytes(256).toString('hex')
    let pass = crypto.createHmac('sha256', _salt).update(req.body.password).digest('hex')
    User.create({
            email: req.body.email,
            password: pass,
            salt: _salt,
            oauth: false
        })
        .then(function() {
            res.json('Signup Silahkan login')
        })
        .catch(function(err) {
            res.status(400).json({
                message: err.message
            })
        })
})

module.exports = router;