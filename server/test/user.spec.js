process.env.NODE_ENV = 'test';

var app = require('../app.js');
var chai = require('chai');
var request = require('supertest');
var mongoose = require('mongoose');

var expect = chai.expect;

const mongo_location = 'mongodb://' + CONFIG.db_host + ':' + CONFIG.db_port + '/' + CONFIG.db_name;

var auth = {};

beforeEach(function(done) {

    function clearDB() {
        for (var i in mongoose.connection.collections) {
            mongoose.connection.collections[i].remove(function() {});
        }
        return done();
    }

    function loginUser(auth) {
        return function(done) {
            request
                .post('/v1/users')
                .send({
                    email: 'test@test.com',
                    password: 'test'
                })
                .expect(200)
                .end(onResponse);

            function onResponse(err, res) {
                auth.token = res.body.token;
                return done();
            }
        };
    };

    if (mongoose.connection.readyState === 0) {
        mongoose.connect(mongo_location, function(err) {
            if (err) {
                throw err;
            }
            return clearDB();
        });
    } else {
        return clearDB();
    }
    loginUser(auth);
});

afterEach(function(done) {
    mongoose.disconnect();
    return done();
});

describe('API Tests user', function() {
    describe('#get()', function() {
        it('should be unauthorized', function(done) {
            request(app)
                .get('/v1/users')
                .set('Content-Type', 'application/json')
                .set('Accept', 'application/json')
                .expect(401)
                .end(function(err, res) {
                    if (err) throw err;
                    // console.log(res.body);
                    done();
                });
        });
        it('should be unauthorized', function(done) {
            request(app)
                .get('/v1/users')
                .set('Content-Type', 'application/json')
                .set('Accept', 'application/json')
                .set('Authorization', 'bearer ' + auth.token)
                .expect(200)
                .end(function(err, res) {
                    if (err) throw err;
                    // console.log(res.body);
                    done();
                });
        });
    });

    describe('#create()', function() {
        it('Bad parameter mail instead of email', function(done) {
            request(app)
                .post("/v1/users")
                .send({
                    mail: 'test@gmail.com',
                    password: 'secure-password'
                })
                .set('Content-Type', 'application/json')
                .set('Accept', 'application/json')
                .expect(422)
                .end(function(err, res) {
                    if (err) throw err;
                    // console.log(res.body);
                    done();
                });
        });
        it('should create a new User', function(done) {
            request(app)
                .post("/v1/users")
                .send({
                    email: 'test@gmail.com',
                    password: 'secure-password'
                })
                .set('Content-Type', 'application/json')
                .set('Accept', 'application/json')
                .expect(201)
                .end(function(err, res) {
                    if (err) throw err;
                    // console.log(res.body);
                    done();
                });
        });
        it('should not create 2 same User', function(done) {
            request(app)
                .post("/v1/users")
                .send({
                    email: 'test@gmail.com',
                    password: 'secure-password'
                })
                .set('Content-Type', 'application/json')
                .set('Accept', 'application/json')
                .expect(201)
                .end(function(err, res) {
                    if (err) throw err;
                    // console.log(res.body);
                    request(app)
                        .post("/v1/users")
                        .send({
                            email: 'test@gmail.com',
                            password: 'secure-password'
                        })
                        .set('Content-Type', 'application/json')
                        .set('Accept', 'application/json')
                        .expect(422)
                        .end(function(err, res) {
                            if (err) throw err;
                            // console.log(res.body);
                            done();
                        });
                });
        });
    });


});
