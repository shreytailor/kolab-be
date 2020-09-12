// Importing the important packages.
const express = require('express');
const bodyparser = require('body-parser');
const port = process.env.PORT || 3001;

// Setting up our application.
const kolab = express();
kolab.use(bodyparser.urlencoded({extended: true}));
kolab.use(bodyparser.urlencoded({ extended: true }));
kolab.use(bodyparser.json());
kolab.use(bodyparser.raw());

// Importing all the required endpoints.
const validateAccessToken = require('./api/tokenId/validate');

// Using all the API endpoints.
kolab.use("/api/tokenId/validate", validateAccessToken);

// Starting up the server.
kolab.listen(port);