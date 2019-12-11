module.exports.raffle = (json) => {
    const rand = (min, max) => {
        return Math.floor(Math.random() * (max - min + 1) ) + min;
    }
    return json[rand(0, json.length-1)];
}