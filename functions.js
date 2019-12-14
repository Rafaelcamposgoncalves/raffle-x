exports.setMax = (num, max) => {
    return num >= max ? max : num;
}
exports.rand = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}
exports.removeRowJson = (json, key, value, repeat) => {
    return !repeat ? json.filter((jsonObject) => { return jsonObject[key] != value;}) : json;
}
exports.removeDuplicate = (json) => {
    j = json.filter((a) => {
        return !this[JSON.stringify(a.id)] && (this[JSON.stringify(a.id)] = true);
    }, Object.create(null));
    return j;
}