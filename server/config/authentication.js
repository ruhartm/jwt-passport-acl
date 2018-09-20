import passport from 'passport';
import passportJwt from 'passport-jwt';
import jwt from 'jsonwebtoken';
import config from './config';
import User from '../models/user.model';

let userMail = null;

// default export
export default {
    initialize: () => passport.initialize(),
    authenticate: () => passport.authenticate('jwt', { session: config.jwt.session }),
    returnSignJwtToken,
    setJwtStrategy,
    getUserMail: () => userMail

};

// destructuring passport-jwt
const { Strategy: JwtStrategy, ExtractJwt } = passportJwt;
// destructuring config.jwt.secret
const { secret } = config.jwt;

// sign and return JWT token
function returnSignJwtToken(payload) {
    const opts = {};
    // Signing a token with 1 hour of expiration
    opts.expiresIn = Math.floor(Date.now() / 1000) + (60 * 60);
    const token = jwt.sign(payload, secret, opts);
    return token;
}

// set the password strategy
function setJwtStrategy() {
    const opts = {
        jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
        secretOrKey: secret,
        passReqToCallback: true
    };
    const strategy = new JwtStrategy(opts, (req, jwtPayload, done) => {
        User.findOne({ email: jwtPayload.email }, (err, user) => {
            if (err) {
                return done(err, false);
            }
            if (user) {
                // eslint-disable-next-line
                userMail = jwtPayload.email;
                done(null, true);
            } else {
                done(null, false);
            }
            return false;
        });
    });

    passport.use(strategy);
}
