const express = require('express');
const router = express.Router();
const connection = require('././../../db/dbConnect');

router.get("/", function(request, response, next) {
    // Clearing the whole table.
    connection.query(`delete from Questions`, function (error, results, fields) {
        if (error) throw error;
    })

    response.status(200).send();
})

module.exports = router;