const router = require('express').Router()
const jwt = require('jsonwebtoken');
require('dotenv').config();
const { OAuth2Client } = require('google-auth-library');
const client = new OAuth2Client(process.env.CLIENT_ID);
const User = require('../models/user.js')

router.post('/signin', (req, res) => {
    // res.send('hello');
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

module.exports = router;