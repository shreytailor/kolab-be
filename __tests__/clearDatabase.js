const axios = require('axios');
const { json } = require('body-parser');
const expect = require('chai').expect;
const baseUrl = "http://localhost:3001/api";

it("clear all questions" , async () => {
    await axios.get(baseUrl + "/question/clear");
    const response = await axios.get(baseUrl + "/question/getAll");
    const data = response.data;
    expect(JSON.stringify(data)).to.equal("[]");
})