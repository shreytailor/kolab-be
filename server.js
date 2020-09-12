// Importing the important packages.
const express = require('express');
const cors = require('cors');
const bodyparser = require('body-parser');
const port = process.env.PORT || 3001;

// Setting up our application.
const kolab = express();
kolab.use(bodyparser.urlencoded({extended: true}));
kolab.use(bodyparser.urlencoded({ extended: true }));
kolab.use(bodyparser.json());
kolab.use(bodyparser.raw());
kolab.use(cors());

// Importing all the required endpoints.
const welcome = require('./api/welcome');
const validateAccessToken = require('./api/tokenId/validate');

// Using all the API endpoints.
kolab.use("/api/", welcome);
kolab.use("/api/tokenId/validate", validateAccessToken);

// Starting up the server.
kolab.listen(port);