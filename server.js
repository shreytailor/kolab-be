// Importing the important packages/configuration.
const cors = require('cors');
const express = require('express');
const bodyparser = require('body-parser');
const port = process.env.PORT || 3001;

// Setting up our application.
const kolab = express();
kolab.use(cors());
kolab.use(bodyparser.raw());
kolab.use(bodyparser.json());
kolab.use(bodyparser.urlencoded({extended: true}));
kolab.use(bodyparser.urlencoded({ extended: true }));

// Importing all the required endpoints.
const welcome = require('./api/welcome');
const validateAccessToken = require('./api/tokenId/validate');
const addQuestion = require('./api/question/add');

// Using all the API endpoints.
kolab.use("/api/", welcome);
kolab.use("/api/tokenId/validate", validateAccessToken);
kolab.use("/api/question/add", addQuestion);

// Starting up the server.
const server = kolab.listen(port);