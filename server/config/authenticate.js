import passport from 'passport';
import passportJwt from 'passport-jwt';
import config from './config';

// default export
export default {
    initialize: () => passport.initialize(),
    authenticate: () => passport.authenticate('jwt', { session: config.jwt.session }),
    setJwtStrategy
};

// destructuring passport-jwt
const {
    Strategy: JwtStrategy,
    ExtractJwt
} = passportJwt;

function setJwtStrategy() {
    const opts = {
        jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
        secretOrKey: config.jwt.secret,
        passReqToCallback: true
    };
    const strategy = new JwtStrategy(opts, (req, jwtPayload, done) => {
        if (jwtPayload.email === 'rh@trueinnovation.de') {
            console.log('found rudi');
            return done(null, true);
        }
        console.log('not found rudi');
        return done(null, false);
    });

    passport.use(strategy);
}
