# jwt-passport-acl
Stateless Authentication and Authorization Express, Mongoose, Passport, JWT, node-acl written in ES6

## Requirements
- [Node.js]("https://nodejs.org/") >= 8.x
- [MongoDB]("https://docs.mongodb.com/manual/installation/")

## Configuration
### server/config/config.js
To establish a connection to the database, you may configure the database connection parameters in global configuration 
default is mongodb://localhost:27017/jwtpassauth.

## Authentication
### server/config/authentication.js
Authentication is based on [json web tokens]("https://jwt.io") and passwort-jwt.
After a successful login the generated token is sent to the requester. To access the protected routes, the requester must sent the token in the header request.  
We will use the following default exports from authentication.js
```
export default {   
    initialize: () => passport.initialize(),   
    authenticate: () => passport.authenticate('jwt', { session: config.jwt.session }),   
    returnSignJwtToken,   
    setJwtStrategy   
};
```

## JWT Secret
The JWT secret key is set in the global configuration file. Edit them to suit your needs.
The JWT contains encoded information about the user and a signature that, when decoded, is validated to ensure that the token has not been tampered with.

## API
### Signup: `/users/signup`
```
POST /users/signup
Host: localhost:3001
Content-Type: application/json

{
    "email": "dummy@nodomain.com",
    "password": "password"
}
```
***
### Signin: `/users/signin`
```
POST /users/signin
Host: localhost:3001
Content-Type: application/json

{
    "email": "dummy@nodomain.com",
    "password": "password"
}
```

Returned JSON:   
{   
    "success": "Welcome JWT auth Passed",   
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InJAci5kZSIsImlhdCI6MTUzNTQ1MTg5NSwiZXhwIjozMDcwOTA3MzkwfQ.NttgaHSkIonyyn4_Ds9bl50ltF4g93CSWLLOFRJelYk"    
}    

***

### JWT Protected: `/protected`
```
GET /protected
Host: localhost:3001
Authorization: Bearer Token 
Token: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InJAci5kZSIsImlhdCI6MTUzNTQ1MTg5NSwiZXhwIjozMDcwOTA3MzkwfQ.NttgaHSkIonyyn4_Ds9bl50ltF4g93CSWLLOFRJelYk
```




## Scripts
**eslint extends eslint-config-airbnb-base**
```bash
$ npm run linter 
contains all of eslint-config-airbnb-base default ESLint rules, including ECMAScript 6+. 
It requires eslint and eslint-plugin-import
```

**Development start nodemon**
```bash
$ npm run serve
```



## References  
Blogs and repros about this subject that I enjoy reading.    
***

**Credits to:**
* [Stateless Auth with Express, Passport, Jwt](https://medium.com/@paul.allies/stateless-auth-with-express-passport-jwt-7a55ffae0a5c)   
* [Node Js JWT Authentication Tutorial From Scratch](https://appdividend.com/2018/02/07/node-js-jwt-authentication-tutorial-scratch)   
* [express-jwt-acl-mongoose-starter from patrickvaler](https://github.com/patrickvaler/express-jwt-acl-mongoose-starter)  


