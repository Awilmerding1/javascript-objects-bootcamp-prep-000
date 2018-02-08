var playlist = {artistName: "songTitle"}
function updatePlaylist(obj, key, value) {
obj[key] = value;
return obj;
}

function removeFromPlaylist(obj, key) {
obj = delete obj.key;
return obj;
}