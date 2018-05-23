const Playlist = require('../models').Playlist;

const create = async function(req, res){
    res.setHeader('Content-Type', 'application/json');
    let err, playlist;
    let user = req.user;

    let playlist_info = req.body;
    playlist_info.users = [{user:user._id}];

    [err, playlist] = await to(Playlist.create(playlist_info));
    if(err) return ReE(res, err, 422);

    return ReS(res,{playlist:playlist.toWeb()}, 201);
}
module.exports.create = create;

const getAll = async function(req, res){
    res.setHeader('Content-Type', 'application/json');
    let user = req.user;
    let err, playlists;
    [err, playlists] = await to(user.Playlists());

    let playlists_json = []
    for (let i in playlists){
        let playlist = playlists[i];
        playlists_json.push(playlist.toWeb())
    }
    return ReS(res, {playlists: playlists_json});
}
module.exports.getAll = getAll;

const get = function(req, res){
    res.setHeader('Content-Type', 'application/json');
    let playlist = req.playlist;
    return ReS(res, {playlist:playlist.toWeb()});
}
module.exports.get = get;

const update = async function(req, res){
    let err, playlist, data;
    playlist = req.user;
    data = req.body;
    playlist.set(data);

    [err, playlist] = await to(playlist.save());
    if(err){
        return ReE(res, err);
    }
    return ReS(res, {playlist:playlist.toWeb()});
}
module.exports.update = update;

const remove = async function(req, res){
    let playlist, err;
    playlist = req.playlist;

    [err, playlist] = await to(playlist.remove());
    if(err) return ReE(res, 'error occured trying to delete the playlist');

    return ReS(res, {message:'Deleted Playlist'}, 204);
}
module.exports.remove = remove;
