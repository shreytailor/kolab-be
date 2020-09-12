const express = require('express');
const router = express.Router();
const { default: Axios } = require('axios');

router.post("/", function(request, response, next) {
    const tokenId = request.body.tokenId;
    
    // Check against the Google API endpoint, whether the current token is valid.
    Axios.get(`https://www.googleapis.com/oauth2/v3/tokeninfo?id_token=${tokenId}`)
    .then(function(googleResponse) {
        // If valid, then send the response containing 200 status code.
        response.send({
            status: 200,
            name: googleResponse.data.name,
            email: googleResponse.data.email
        });
    })
    .catch(function(error) {
        // If invalid, then send the response containing 401 status code.
        response.send({
            status: 401
        });
    });
})

module.exports = router;