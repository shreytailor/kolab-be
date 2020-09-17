const axios = require('axios');
const expect = require('chai').expect;
const baseUrl = "http://localhost:3001/api";

it("add question", async () => {
    await axios.get(baseUrl + "/question/clear");
    await axios.post(baseUrl + "/question/add", {
        "question": "question for testing."
    })
    
    const response = await axios.get(baseUrl + "/question/getAll");
    const json = response.data;
    
    expect(json.length).to.equal(1);
    expect(json[0].question).to.equal("question for testing.");
})