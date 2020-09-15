require('dotenv').config();
const express = require('express');
const router = express.Router();
const date = require('date-and-time');
const connection = require('./../../db/dbConnect');

router.post("/", function (request, response, next) {
    // Extracting all the information about the question.
    const object = request.body;
    const question = object.question;
    const time_created = date.format(new Date(), "YYYY-MM-DD hh:mm:ss");

    // Using the information, make an SQL query to the server.
    connection.query(`insert into Questions (question, time_created, is_answered) values ("${question}", "${time_created}", 0)`, function (error, results, fields) {
        if (error) throw error;
    })

    response.status(200).send();
})

module.exports = router;