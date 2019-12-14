const f = require('./functions');
exports.raffle = (json, key, count=1, repeat=false) => {
    let j = json, total=[];
    j = f.removeDuplicate(j, 'id');
    count = !repeat ? f.setMax(count, j.length):count;
    for(i=0;i<count;i++){
        total = total.concat(j[f.rand(0, j.length-1)]);
        j = f.removeRowJson(j, key, total[i].id, repeat);
    }
    return total;
}