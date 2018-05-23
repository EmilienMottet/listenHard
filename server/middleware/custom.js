const Playlist = require('./../models/playlist');

let playlist = async function (req, res, next) {
    let playlist_id, err, playlist;
    playlist_id = req.params.playlist_id;

    [err, playlist] = await to(Playlist.findOne({_id:playlist_id}));
    if(err) return ReE(res,"err finding playlist");

    if(!playlist) return ReE(res, "Playlist not found with id: "+playlist_id);
    let user, users_array;
    user = req.user;
    users_array = playlist.users.map(obj=>String(obj.user));

    if(!users_array.includes(String(user._id))) return ReE(res, "User does not have permission to read app with id: "+app_id);

    req.playlist = playlist;
    next();
}
module.exports.playlist = playlist;
