import jwt from 'jsonwebtoken';
import express from 'express';

const router = express.Router();

router.post('/signin', (req, res) => {
    const { email, password } = req.body;
    // This lookup would normally be done using a database
    if (email === 'rh@trueinnovation.de') {
        if (password === 'password') { // the password compare would normally be done using bcrypt.
            const opts = {};
            // Signing a token with 1 hour of expiration
            opts.expiresIn = Math.floor(Date.now() / 1000) + (60 * 60);
            const secret = 'SECRET_KEY'; // normally stored in process.env.secret
            const token = jwt.sign({ email }, secret, opts);
            return res.status(200).json({
                message: 'Auth Passed',
                token
            });
        }
    }
    return res.status(401).json({ message: 'Auth Failed' });
});

export default router;
