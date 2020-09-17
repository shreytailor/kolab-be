<div align="center">
    <img alt="kolab-logo" src="./resources/logo.png" width="100px" />
    <br/>
    <b>Kolab Backend Documentation</b>
    <br/>
    <img alt="build:passing" src="https://img.shields.io/badge/Build-Passing-brightgreen">
    <img alt="licence:mit" src="https://img.shields.io/badge/Licence-MIT-9cf">
</div>

The origin for all the endpoints for this API is `https://kolab-be.azurewebsites.net/api/`.

#### Table of Contents
1. [Project Brief](#project-brief)
2. [Endpoints](#endpoints)
    - [Question](#question)
    - [Answer](#answer)
    - [Access Token](#access-token)
3. [Testing](#testing)
4. [Quick Links](quick-links)
5. [Licence](#licence)

## Project Brief
This repository contains the Node.js/Express server which is consumed by the React frontend of this project. Some of its primary duties are to contact Google servers to confirm whether the user's access token is valid, and to query the MySQL database for data.

The main repository of the Kolab project can be found [here](https://github.com/shreytailor/kolab-fe).

## Endpoints
### Question
This endpoint is used for adding new questions.
```
***** POST: /api/question/add *****
{
    "question": <your_question_string>
}
```
<br>
This endpoint is used for deleting a particular question. Note that this deletes the associated answer as well (if there exists one).
```
***** POST: /api/question/delete *****
{
    "questionId": <your_question_id>
}
```
<br>
This endpoint is used for getting all the questions from the database, when displaying the Dashboard to the user.
```
***** GET: /api/question/getAll *****
```

### Answer
This endpoint is used to add answer to an existing question.
```
***** POST: /api/answer/add *****
{
    "questionId": <your_question_id>,
    "answer": "<your_answer_string>
}
```
<br>
This endpoint is used to get an answer to a particular question.
```
***** POST: /api/answer/get *****
{
    "questionId": <your_question_id>
}
```

### Access Token
This endpoint is used to confirm against Google's servers whether the access token provided by the user is a valid one or not.
```
***** POST: /api/accessId/validate *****
{
    "tokenId": <your_token_id>
}
```

## Testing
With regards to the API and the communication with the MySQL database, there was two types of testing performed.

- **Testing during development** - the main method here was to test using JS scripts within an application called [Postman](https://www.postman.com/). After the creation of each endpoint, there would be test cases created and used with the script, to test with different inputs. We would eventually check whether it produces the expected output. This was the primary way of testing.
- **Testing post development** - this was performed using a JavaScript library called [Mocha](https://mochajs.org/) where scripts were created to test each endpoint.

Even though both methods were ideal ways of testing an API, it seemed more intuitive using scripts within Postman because you want to do testing as you create your endpoints, rather than just at the end, and Postman provided a much better interface to do this.

## Quick Links
- [Node.js documentation](https://nodejs.org/en/docs/)
- [Express documentation](https://expressjs.com/en/starter/installing.html)
- [Axios documentation](https://github.com/axios/axios)
- [Mocha documentation](https://mochajs.org/)

## Licence
> You can check out the full licence <a href="./LICENSE">here</a>.

This project is licensed under the terms of the MIT Licence.