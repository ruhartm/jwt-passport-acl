
# jwt-passport-acl
Stateless Authentication and Authorization Express, Mongoose, Passport, JWT, node-acl written in ES6

## Requirements
- [Node.js]("https://nodejs.org/") >= 8.x
- [MongoDB]("https://docs.mongodb.com/manual/installation/")

## Configuration
### server/config/config.js
To establish a connection to the database, you may configure the database connection parameters in the global configuration 
file. Dfault is mongodb://localhost:27017/jwtpassauth.

## Authentication
### server/config/authenticate.js
Authentication is based on [json web tokens]("https://jwt.io") and passwort-jwt.
After a successful login the generated token is sent to the requester. To access the protected routes, the requester must sent the token in the header request.

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
###Signin: `/users/signin`
```
POST /users/signin
Host: localhost:3001
Content-Type: application/json

{
    "email": "dummy@nodomain.com",
    "password": "password"
}
```



## References  
Blogs and repros about this subject that I enjoy reading.    
***


* [Stateless Auth with Express, Passport, Jwt](https://medium.com/@paul.allies/stateless-auth-with-express-passport-jwt-7a55ffae0a5c)   
* [Node Js JWT Authentication Tutorial From Scratch](https://appdividend.com/2018/02/07/node-js-jwt-authentication-tutorial-scratch)   
* [express-jwt-acl-mongoose-starter from patrickvaler](https://github.com/patrickvaler/express-jwt-acl-mongoose-starter)  

