module.exports.raffle = (json, count=1) => {
    const rand = (min, max) => {
        return Math.floor(Math.random() * (max - min + 1) ) + min;
    }
    var total=[];
    for(i=0;i<count;i++){
        var total = total.concat(json[rand(0, json.length-1)]);
    }

    return total;
    
}