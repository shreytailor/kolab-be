const util = require('util');
const should = require('should');
const request = require('request');
const expect = require('chai').expect;
const baseUrl = "http://localhost:3001/api";

let questionNumber;

describe("database testing", () => {
    it("clear all questions" , (done) => {
        request.get({url: baseUrl + "/question/clear"}, function(error, response, body) {
            request.get({url: baseUrl + "/question/getAll"}, function(error, response, body) {
                expect(body).to.equal('[]');
                done();
            })
        })
    })

    it("add question", (done) => {
        request.post({url: baseUrl + "/question/add", json: {
            "question": "question for testing."
        }}, function(error, response, body) {
            request.get({url: baseUrl + "/question/getAll"}, function(error, response, body) {
                const json = JSON.parse(body);
                expect(json.length).to.equal(1);
                questionNummber = json[0].questionId;
                expect(json[0].question).to.equal("question for testing.");
                done();
            })
        })
    })

    it("add answer", (done) => {
        request.post({url: baseUrl + "/answer/add", json: {
            "questionId": `${questionNumber}`,
            "answer": "answer for testing."
        }}, function(error, response, body) {
            request.post({url: baseUrl + "/answer/get", json: {
                "questionId": `${questionNumber}`
            }}, function(error, response, body) {
                console.log(error, response, body);
                done();
            })
        })
    })
})