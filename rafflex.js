module.exports.raffle = (json, count=1, repeat=false) => {
    let j = json, total=[];
    const setMax = (num, max) => {
        num = num >= max ? max : num;
        return num;
    }
    const rand = (min, max) => {
        return Math.floor(Math.random() * (max - min + 1) ) + min;
    }
    count = !repeat ? setMax(count, json.length) : count = count;

    removerPela = (chave, valor) => {
        if(!repeat){
            j = j.filter(function(jsonObject) {
                return jsonObject[chave] != valor;
            });
        }
        return j;
    }
    for(i=0;i<count;i++){
        total = total.concat(j[rand(0, j.length-1)]);
        var data = {'cd' : i };
        removerPela('id', total[i].id);
    }
    return total;
}