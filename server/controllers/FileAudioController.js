const Song = require('../models').Song;

const mongoose = require('mongoose');
const multer = require('multer');
const {
    Readable
} = require('stream');

const gridFsService = require('../services/GridFsService');
const youtubeDlService = require('../services/YoutubeDlService');

const getAll = async function(req, res) {
    res.setHeader('Content-Type', 'application/json');
    let user = req.user;
    let err, songs;
    [err, songs] = await to(user.Songs());

    let songs_json = [];
    for (let i in songs) {
        let song = songs[i];
        songs_json.push(song.toWeb());
    }
    return ReS(res, {
        songs: songs_json
    });
};
module.exports.getAll = getAll;

const createFromYoutube = async function(req, res) {
    if (!req.body.name) {
        console.log(req.body);
        return ReE(res, {
            message: "No track name in request body"
        }, 400);
    }
    if (!req.body.youtubeUrl) {
        return ReE(res, {
            message: "No youtubeUrl in request body"
        }, 400);
    }
    youtubeDlService.createYoutubeSong(
        req.body.youtubeUrl,
        req.body.name,
        async function(error, createdFile) {
            if (error) {
                res.status(500).send(error);
            }

            var id = createdFile._id;
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
        });
}
module.exports.createFromYoutube = createFromYoutube;

const create = async function(req, res) {
    //obtain a model

    const storage = multer.memoryStorage();
    const upload = multer({
        storage: storage,
        limits: {
            fields: 1,
            fileSize: 20000000,
            files: 1,
            parts: 2
        }
    });

    upload.single('track')(req, res, (err) => {
        if (err) {
            return ReE(res, {
                err,
                message: "Upload Request Validation Failed"
            }, 400);
        } else if (!req.body.name) {
            return ReE(res, {
                err,
                message: "No track name in request body"
            }, 400);
        }

        let trackName = req.body.name;

        // Covert buffer to Readable Stream
        const readableTrackStream = new Readable();
        readableTrackStream.push(req.file.buffer);
        readableTrackStream.push(null);

        gridFsService.uploadSong(
            trackName,
            readableTrackStream,
            async function(error, createdFile) {
                if (error) {
                    res.status(500).send(error);
                }

                var id = createdFile._id;
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
};

module.exports.create = create;

const playSong = async function(req, res) {
    res.set('content-type', 'audio/mp3');
    res.set('accept-ranges', 'bytes');


    var downloadStream = gridFsService.readSong(req.params.trackID);
    downloadStream.on('data', (chunk) => {
        res.write(chunk);
    });

    downloadStream.on('error', () => {
        console.log(downloadStream == null);
        res.sendStatus(404);
    });

    downloadStream.on('end', () => {
        res.end();
    });
}

module.exports.playSong = playSong;
