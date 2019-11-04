# Auth starter

This project is to help people make it easier to start the project from scratch here comes a starter!



# Back end!

  - NodeJS
  - MongoDB to database
  - Passport to jwt
## Tech

These are the packages used for back end:

* [bcrypt](https://github.com/kelektiv/node.bcrypt.js/ "bcrypt") - Good for hash passwords
* [body-parser](https://www.npmjs.com/package/body-parser "body-parser") - The body to requisitions
* [cors](https://www.npmjs.com/package/cors "cors") - Security for your api
* [express](https://expressjs.com/ "express") - Nodejs framework for web
* [jsonwebtoken](https://github.com/auth0/node-jsonwebtoken "jsonwebtoken") - For generate webtoken
* [mongoose](https://mongoosejs.com/ "mongoose") - Connect to MongoDB
* [passport & passport-jwt](http://www.passportjs.org/ "passport & passport-jwt") - Security controllers and routes with jwt auth


# Front end!

  - VueJS
  - Vuex
  - Vue-router

## Tech

These are the packages used for front end:

* [ Vue JS](https://vuejs.org/ " Vue JS") - I love this :tw-1f60d:
* [axios](https://github.com/axios/axios "axios") - Requests
* [js-cookie](https://github.com/js-cookie/js-cookie "js-cookie") - Easy cookie use
* [vue-router](https://router.vuejs.org/ "vue-router") - Routes in client side
* [vuex](https://vuex.vuejs.org/ "vuex") - Application state manager
* [vue cli](https://cli.vuejs.org "vue cli") - Best project manager
* [babel-eslint ](https://github.com/babel/babel-eslint "babel-eslint ") - Babel is babel :tw-1f60c:
* [node-sass](https://github.com/sass/node-sass "node-sass") - SCSS convert


### Installation

1- Go to
```sh
$ nano config/config.js
```

2- Change values for your preference:
```sh
module.exports = {
    jwtSecret: 'yourjwtsecret',
    db: 'mongodb://localhost:27017/starter'
}
```
where jwtSecret is your secret jwt and  db is your url to mongodb.
*if you have a user in mongodb you need to put here too exemple*
> *mongodb://username:password@host:port/database*

3- Use 
```sh
$ npm install 
```

4- Go to front end application and install dependencies.

```sh
$ cd client
$ npm install 
```

5 - Go to 
*inside /client*
```sh
$ nano src/utils/request.js
```

6- Change baseURL for your preference
> const service = axios.create({
		  baseURL: 'http://localhost:5000/api',
		  timeout: 10000
})

7- Now go to /client again and run
```sh
$ npm run build
```

8- Go to project home folder and run to start node server
```sh
$ npm run start
```

Go to you api and and succeed!

Please contribute to this project and improve code, commit request or issues will always be welcome!

License
----

MIT


