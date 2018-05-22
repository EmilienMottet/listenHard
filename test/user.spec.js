var app = require('../app.js');
var chai = require('chai');
var request = require('supertest')(app);

var expect = chai.expect;



describe('API Tests user', function() {
    it("Responds with 'Hello, World!'", function(done) {
        request
            .get("/")
            .expect(200)
            .expect("Hello, World!")
            .end(done);
    });
});
