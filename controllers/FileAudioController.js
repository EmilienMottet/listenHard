const Song = require('../models').Song;

const mongoose = require('mongoose');
const multer = require('multer');
const { Readable } = require('stream');


var Attachment;
//instantiate mongoose-gridfs
mongoose.connection.on('open', () => {
    var gridfs = require('mongoose-gridfs')({
        collection: 'tracks',
        model: 'FileAudioBin',
        // bucketName : '
        mongooseConnection: mongoose.connection
    });
    Attachment = gridfs.model;
    console.log("Attachment done");
})



const create = async function(req, res) {
    //obtain a model

    const storage = multer.memoryStorage();
    const upload = multer({
        storage: storage,
        limits: {
            fields: 1,
            fileSize: 6000000,
            files: 1,
            parts: 2
        }
    });

    upload.single('track')(req, res, (err) => {
        if (err) {
            return ReE(res, {err,  message: "Upload Request Validation Failed"},400);
        } else if (!req.body.name) {
            return ReE(res, {err,  message: "No track name in request body"},400);
        }

        let trackName = req.body.name;

        // Covert buffer to Readable Stream
        const readableTrackStream = new Readable();
        readableTrackStream.push(req.file.buffer);
        readableTrackStream.push(null);

        Attachment.write({
                filename: trackName,
                contentType: 'audio/mp3'
            }, readableTrackStream,
            async function(error, createdFile) {
                var id = createdFile._id;
                if (error) {
                    res.status(500).send(error);
                }

                res.setHeader('Content-Type', 'application/json');
                let err, song;
                let user = req.user;

                let song_info = req.body;
                song_info.users = [{
                    user: user._id
                }];
                song_info.fileAudioBin = id;

                [err, song] = await to(Song.create(song_info));
                if (err) return ReE(res, err, 422);

                return ReS(res, {
                    song: song.toWeb()
                }, 201);
            }
        );
    });
}

module.exports.create = create;
