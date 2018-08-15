import express from 'express';
import bodyParser from 'body-parser';
import morgan from 'morgan';
import mongoose from 'mongoose';
import config from './config/config';
import auth from './config/authenticate';
import router from './routes/signin.route';

const app = express();

// HTTP request logger
app.use(morgan('dev'));

// Mongodb connection
mongoose.connect(config.db, { useNewUrlParser: true }, (err) => {
    if (err) {
        console.log(`[MongoDB] Failed to connect. ${err}`);
    }
});

// HTTP request body paser
// if extended is false, you can not post "nested object"
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Setup passport authentification
app.use(auth.initialize());
auth.setJwtStrategy();

// Start middelware routes
app.get('/', (req, res) => {
    res.send('Hello express server');
});

// signup route
app.use('/users', router);

// passport authentification route
app.get('/protected', auth.authenticate(), (req, res) => res.status(200).send('access to protected Route'));


app.listen(config.apiPort, () => {
    console.log(`[Server] listening on port ${config.apiPort}`);
});
