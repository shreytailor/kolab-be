const express = require('express');
const router = express.Router();
const connection = require('./../../db/dbConnect');

router.post("/", function (request, response, next) {
    // Extracting important information from the request from the user.
    const object = request.body;
    const questionId = object.questionId;
    const answer = object.answer;

    // Performing the SQL query in order to insert an answer.
    connection.query(`insert into Answers (questionId, answer) values ("${questionId}", "${answer}")`, function (error, results, fields) {
        if (error) throw error;
    })

    response.status(200).send();
})

module.exports = router;