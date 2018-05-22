process.env.NODE_ENV = 'test';

var app = require('../app.js');
var chai = require('chai');
var request = require('supertest');
var mongoose = require('mongoose');

var expect = chai.expect;


beforeEach(function (done) {

    function clearDB() {
        for (var i in mongoose.connection.collections) {
            mongoose.connection.collections[i].remove(function() {});
        }
        return done();
    }

    if (mongoose.connection.readyState === 0) {
        mongoose.connect(config.db.test, function (err) {
            if (err) {
                throw err;
            }
            return clearDB();
        });
    } else {
        return clearDB();
    }
});

afterEach(function (done) {
    mongoose.disconnect();
    return done();
});

describe('API Tests user', function() {
    describe('#create()', function(){
        it('should create a new User', function(done) {
            request(app)
                .post("/v1/users")
                .send({
                    mail: 'test@gmail.com',
                    password: 'secure-password'
                })
                .set('Content-Type', 'application/json')
                .set('Accept', 'application/json')
                .expect(200)
                .end(function (err, res) {
                    if (err) throw err;
                    console.log(res.body);
                    done();
                });
        });
    })
});
;
