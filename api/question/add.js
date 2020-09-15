require('dotenv').config();
const express = require('express');
const router = express.Router();

router.get("/", function(request, response, next) {
    response.send({
        "port": `${process.env.DB_PORT}`
    });
})

module.exports = router;