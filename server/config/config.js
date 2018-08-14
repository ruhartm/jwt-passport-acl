

const defaultConfig = {
    db: 'mongodb://localhost:27017/jwtpassauth', 
    apiPort: 3001,
    jwt: {
        session: false,
        secret: 'MY_SECRET' 
    }
};

export default defaultConfig;
