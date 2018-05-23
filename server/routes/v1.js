const express = require('express');
const router = express.Router();

const custom = require('./../middleware/custom');

const UserController = require('./../controllers/UserController');
const FileAudioController = require('./../controllers/FileAudioController');

const passport = require('passport');


require('./../middleware/passport')(passport)
/* GET home page. */
router.get('/', function(req, res, next) {
    res.json({
        status: "success",
        message: "Parcel Pending API",
        data: {
            "version_number": "v1.0.0"
        }
    });
});

router.post('/users', UserController.create); // C
router.get('/users', passport.authenticate('jwt', {
    session: false
}), UserController.get); // R
router.put('/users', passport.authenticate('jwt', {
    session: false
}), UserController.update); // U
router.delete('/users', passport.authenticate('jwt', {
    session: false
}), UserController.remove); // D
router.post('/users/login', UserController.login);

router.get('/songs', passport.authenticate('jwt', {
    session : false
}),FileAudioController.getAll);

router.post('/songs/bin', passport.authenticate('jwt', {
    session: false
}), FileAudioController.create); // C
router.get('/songs/bin/:trackID', passport.authenticate('jwt', {
    session: false
}), FileAudioController.playSong); // R

module.exports = router;
