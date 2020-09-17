const express = require('express');
const router = express.Router();
const pool = require('./../../db/dbConnect');

router.post("/", function (request, response, next) {
    // Extracting the question number that we want to delete.
    const questionId = request.body.questionId;

    // Performing the SQL action of deleting the corresponding row.
    pool.query(`delete from Questions where questionId = ${questionId}`, function (error, results, fields) {
        if (error) throw error;
    })

    response.status(200).send();
})

module.exports = router;