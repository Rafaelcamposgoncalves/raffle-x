const f = require('./functions');
exports.raffle = (json, count=1, repeat=false) => {
    let j = json, total=[];
/*     
     j = j.filter(function (a) {
        return !this[JSON.stringify(a.id)] && (this[JSON.stringify(a.id)] = true);
     }, Object.create(null));
*/

    j = f.removeDuplicate(j);

    count = !repeat ? f.setMax(count, j.length):count;

    for(i=0;i<count;i++){
        total = total.concat(j[f.rand(0, j.length-1)]);
        j = f.removeRowJson(j, 'id', total[i].id, repeat);
    }
    return total;
}