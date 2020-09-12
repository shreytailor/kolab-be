// Importing the important packages.
const express = require('express');
const cors = require('cors');
const bodyparser = require('body-parser');
const port = process.env.PORT || 3015;

// Setting up our application.
const kolab = express();
kolab.use(bodyparser.urlencoded({extended: true}));
kolab.use(bodyparser.urlencoded({ extended: true }));
kolab.use(bodyparser.json());
kolab.use(bodyparser.raw());

let allowedOrigins = ["http://localhost:3000", "http://localhost:3001", "http://kolab17.azurewebsites.net", "https://kolab17.azurewebsites.net"];
kolab.use(cors({
    origin: function(origin, callback) {
                if(!origin) {
                    return callback(null, true);
                }
                
                if (allowedOrigins.indexOf(origin) === -1) {
                let msg = 'The CORS policy for this site does not ' +
                            'allow access from the specified Origin.';
                return callback(new Error(msg), false);
                }
                
                return callback(null, true);
            }
}));

// Importing all the required endpoints.
const welcome = require('./api/welcome');
const validateAccessToken = require('./api/tokenId/validate');

// Using all the API endpoints.
kolab.use("/api/", welcome);
kolab.use("/api/tokenId/validate", validateAccessToken);

// Starting up the server.
kolab.listen(port);