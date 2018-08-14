import express from 'express';
import mongoose from 'mongoose';
import morgan from 'morgan';
import config from './config/config';

const app = express();

// HTTP request logger
app.use(morgan('dev'));

// Mongodb connection
mongoose.connect(config.db, (err) => {
    if (err) {
        console.log(`[MongoDB] Failed to connect. ${err}`);
    }
});

app.get("/", (req, res) => {
    res.send("Hello express server")
})

app.listen(config.apiPort, () => {
    console.log(`[Server] listening on port ${config.apiPort}`);
});

