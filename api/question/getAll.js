const express = require('express');
const router = express.Router();
const connection = require('./../../db/dbConnect');

router.get("/", function (request, response, next) {
    // Performing the SQL query to simply get all the data.
    connection.query(`select * from Questions order by time_created desc`, function (error, results, fields) {
        if (error) throw error;
        response.status(200).send(results);
    })
})

module.exports = router;