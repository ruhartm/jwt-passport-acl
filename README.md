# jwt-passport-acl

Stateless Authentication and Authorization Express, Mongoose, Passport, JWT, node-acl written in ES6

The development is divided into 3 areas

  1. Part    
  Without Mongoose connection (password and user is only authenticated with mock data).    
  **branch feature/part1**

  2. Part     
  User data is encrypted with bcrypt and checked against a Mongodb database.      
  **branch feature/part2**
  
  3. Part     
  Node-acl is used to create access rights for groups and roles.     
  **branch feature/part3**



**References**    
Blogs on this subject that I enjoy reading.    

[Stateless Auth with Express, Passport, Jwt](https://medium.com/@paul.allies/stateless-auth-with-express-passport-jwt-7a55ffae0a5c)   
[Node Js JWT Authentication Tutorial From Scratch](https://appdividend.com/2018/02/07/node-js-jwt-authentication-tutorial-scratch)   
[express-jwt-acl-mongoose-starter from patrickvaler](https://github.com/patrickvaler/express-jwt-acl-mongoose-starter)  
