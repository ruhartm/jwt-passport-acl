import express from 'express';
import bcrypt from 'bcrypt';
import User from '../models/user.model';
import authentication from '../config/authentication';

const signin = express.Router();

signin.post('/signin', (req, res) => {
    const { email, password } = req.body;
    User.findOne({ email })
        .exec()
        .then((user) => {
            bcrypt.compare(password, user.password, (err, result) => {
                if (err) {
                    return res.status(401).json({
                        failed: 'Unauthorized Access'
                    });
                }
                if (result) {
                    const token = authentication.returnSignJwtToken(email);
                    return res.status(200).json({
                        success: 'Welcome JWT auth Passed',
                        token
                    });
                }
                return res.status(401).json({
                    failed: 'Unauthorized Access'
                });
            });
        })
        .catch((error) => {
            res.status(500).json({
                error
            });
        });
});

export default signin;
