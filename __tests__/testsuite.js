const request = require('request');
const { assert } = require('chai');
const expect = require('chai').expect;
const baseUrl = "http://localhost:3001/api";

let questionNumber;

describe("database testing", () => {
    it("delete question", (done) => {
        request.post({url: baseUrl + "/question/delete", json: {
            "questionId": `${questionNumber}`
        }}, function(error, response, body) {
            request.get({url: baseUrl + "/question/getAll"}, function(error, response, body) {
                expect(body).to.equal("[]");
            })

            request.get({url: baseUrl + "/answer/get", json: {
                "questionId": `${questionNumber}`
            }}, function(error, response, body) {
                if (error) {
                    assert.isOk(true);
                }
            })

            done();
        })
    })
})