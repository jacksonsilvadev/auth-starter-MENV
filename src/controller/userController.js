var User = require('../models/user');
var jwt = require('jsonwebtoken');
var config = require('../config/config');

function createToken(user) {
    return jwt.sign({
        id: user.id,
        email: user.email
    }, config.jwtSecret, {
        expiresIn: '20h'
    })
}

module.exports = {
    registerUser(req, res) {
        if (!req.body.email || !req.body.password) {
            return res.status(400).json({
                'msg': 'You need to send email and password'
            });
        }

        User.findOne({
            email: req.body.email
        }, (err, user) => {
            if (err) {
                return res.status(400).json({
                    'msg': err
                });
            }
            if (user) {
                return res.status(400).json({
                    'msg': 'The user already exists'
                });
            }

            let newUser = User(req.body);

            newUser.save((err, user) => {
                if (err) {
                    return res.status(400).json({
                        'msg': err
                    });
                }
                user.password = undefined;
                return res.status(201).json(user);
            });
        });
    },
    loginUser(req, res) {
        if (!req.body.email || !req.body.password) {
            return res.status(400).json({
                'msg': 'You need to send email and password'
            });
        }

        User.findOne({
            email: req.body.email.toLowerCase()
        }, (err, user) => {
            if (err) {
                return res.status(400).json({
                    'msg': err
                });
            }
            if (!user) {
                return res.status(400).json({
                    'msg': 'The user does not exist'
                });
            }

            user.comparePassword(req.body.password, (err, isMatch) => {
                user.password = undefined
                if (isMatch && !err) {
                    return res.status(200).json({
                        user: user,
                        token: createToken(user),
                    });
                } else {
                    return res.status(400).json({
                        msg: 'The email and password don\'t match.'
                    })
                }
            });
        });
    }
};