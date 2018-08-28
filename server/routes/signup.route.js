import express from 'express';
import mongoose from 'mongoose';
import bcrypt from 'bcrypt';
import User from '../models/user.model';

const signup = express.Router();

signup.post('/signup', (req, res) => {
    bcrypt.hash(req.body.password, 10, (err, hash) => {
        if (err) {
            return res.status(500).json({
                err
            });
        }
        const user = new User({
            _id: new mongoose.Types.ObjectId(),
            email: req.body.email,
            password: hash
        });
        user.save().then(() => {
            res.status(200).json({
                success: 'User has been created'
            });
        }).catch((error) => {
            res.status(500).json({
                error
            });
        });
        return false;
    });
});

export default signup;
