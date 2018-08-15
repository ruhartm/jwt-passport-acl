/**
 * global configruation object
 */
const defaultConfig = {
    db: 'mongodb://localhost:27017/jwtpassauth',
    apiPort: 3001,
    jwt: {
        session: false,
        secret: 'SECRET_KEY'
    }
};

export default defaultConfig;
