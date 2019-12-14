const rafflex = require('./index');
const names = [
    {
        "id": "111111",
        "name": "Name 1",
    },{
        "id": "222222",
        "name": "Name 2"
    },{
        "id": "333333",
        "name": "Name 3"
    
    },{
        "id": "444444",
        "name": "Name 4"
    },{
        "id": "444444",
        "name": "Name 5"
    }
];
const raffle = rafflex.raffle(names, 'id', 6, false);
console.log(raffle);