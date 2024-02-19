## BigCommerce Express + React

### Introduction

This projects contains two main directories, one for the client side built using React and the other using NodeJS Express library for the server.

The main purpose of this boilerplate is to use the `node-bigcommerce` package to fetch and alter data using the BigCommerce API. For more information about it, please go to the package page: https://www.npmjs.com/package/node-bigcommerce 


### Getting Started

1. Go to the `server` directory and copy the file `apiKeys.json.sample` into `apiKeys.json` and enter your BigCommerce API information
2. The "bearerToken" is the value used for Basic Authentication on your custom Express API. You can generate a random one using this tool: https://generate-random.org/api-token-generator?count=1&length=64&type=mixed-numbers-symbols&prefix= 
3. Do the same with the file `client/src/apiKeys.js.sample`
4. On both directories `server` and `client` run `npm install` to install all the dependencies
5. We strongly recommend setting up a logrotate for the `server/var/debug.log` file
 

#### Server Side

You can start the server using `npm run dev` to run your server locally using nodemon, otherwise, use `npm run start`. The `server.js` file uses the port `4000` by default.


#### Client Side

You can start the client using `npm start`. It will run on port `3000` by default.
