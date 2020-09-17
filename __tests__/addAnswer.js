const axios = require('axios');
const expect = require('chai').expect;
const baseUrl = "http://localhost:3001/api";

it("add answer", async () => {
    await axios.get(baseUrl + "/question/clear");
    await axios.post(baseUrl + "/question/add", {
        "question": "question for testing."
    })
    const question = await axios.get(baseUrl + "/question/getAll");
    const number = question.data[0];
    await axios.post(baseUrl + "/answer/add", {
        "questionId": number,
        "answer": "answer for testing."
    })
    const response = await axios.post(baseUrl + "/answer/get", {
        "questionId": number
    })

    expect(response[0].answer).to.equal("answer for testing.");
})