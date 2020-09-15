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
kolab.use(bodyparser.urlencoded({ extended: true }));
kolab.use(bodyparser.urlencoded({ extended: true }));

// Importing all the required endpoints.
const welcome = require('./api/welcome');
const validateAccessToken = require('./api/tokenId/validate');
const addQuestion = require('./api/question/add');
const deleteQuestion = require('./api/question/delete');
const getAllQuestions = require('./api/question/getAll');
const addAnswer = require('./api/answer/add');

// Using all the API endpoints.
kolab.use("/api/", welcome);
kolab.use("/api/tokenId/validate", validateAccessToken);
kolab.use("/api/question/add", addQuestion);
kolab.use("/api/question/delete", deleteQuestion);
kolab.use("/api/question/getAll", getAllQuestions);
kolab.use("/api/answer/add", addAnswer);

// Starting up the server.
const server = kolab.listen(port);