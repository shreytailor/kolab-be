const express = require('express');
const router = express.Router();

router.get("/", function(request, response, next) {
    // This route is used to see check if the API is functioning correctly, in deploment.
    response.send({
        "message": "Hello there! Welcome to Kolab API. 😊"
    })
})

module.exports = router;