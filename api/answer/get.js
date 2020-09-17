const express = require('express');
const router = express.Router();
const pool = require('./../../db/dbConnect');

router.post("/", function (request, response, next) {
    // Extracting the question number for which we want the answer.
    const questionId = request.body.questionId;

    // Performing the SQL query on the database.
    pool.query(`select answer from Answers where questionId=${questionId}`, function (error, results, fields) {
        if (error) throw error;
        response.status(200).send(results);
    })
})

module.exports = router;