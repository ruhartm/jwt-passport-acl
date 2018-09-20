import express from 'express';
import bodyParser from 'body-parser';
import morgan from 'morgan';
import mongoose from 'mongoose';
import Acl from 'acl';
import config from './config/config';
import authentication from './config/authentication';
import signin from './routes/signin.route';
import signup from './routes/signup.route';

// use express
const app = express();

// HTTP request logger
app.use(morgan('dev'));

const logger = () => ({
    debug (msg) {
        console.log('*ACL DEBUG:', msg, '*');
    }
});

// Mongodb connection
mongoose.connect(config.db, { useNewUrlParser: true }, (err) => {
    if (err) console.log(`[MongoDB] Failed to connect. ${err}`);
    // eslint-disable-next-line
    const acl = new Acl(new Acl.mongodbBackend(mongoose.connection.db, 'acl_'), logger());
    const authorization = (request, response, next) => acl.middleware(1, authentication.getUserMail())(request, response, next);

    // HTTP request body paser
    // if extended is false, you can not post "nested object"
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(bodyParser.json());

    // setup passport authentification
    app.use(authentication.initialize());
    authentication.setJwtStrategy();


    // start Routes
    app.get('/', (req, res) => {
        res.send('Hello express server');
    });

    // signin route
    app.use('/users', signin);
    // singup route
    app.use('/users', signup);


    // passport authentification route
    app.get('/protected', authentication.authenticate(), authorization, (req, res) => res.status(200).send(`access to protected Route ${authentication.getUserMail()}`));
});

app.listen(config.apiPort, () => {
    console.log(`[Server] listening on port ${config.apiPort}`);
});
