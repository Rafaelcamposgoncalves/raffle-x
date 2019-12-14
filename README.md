# raflle-x
  
Name raffle module.
   
### Importing  
```javascript
const raffleX = require('raffle-x');
```  
  
### Parameters  
(array, key, quantity, false)

| PARAMETER  | VALUE           | OBS                                           |
|------------|-----------------|-----------------------------------------------|
| array      | JSON array      | JSON array with values ​​to be raffles          |
| key        | array key       | Key of the field to be located                |
| quantity   | quantity number | Number of names raffles                       |
| duplicity  | true/false      | If the same die can be raffles more than once |
  

### Usage example 

```javascript
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

rafflex.raffle(names, 'id', 6, false);
```
### Return  

returns a json object with the raffle values
```javascript
[
  { id: '222222', name: 'Name 2' },
  { id: '444444', name: 'Name 4' },
  { id: '333333', name: 'Name 3' },
  { id: '111111', name: 'Name 1' }
]
```
### Note
	
> If you have any duplicate keys, **raffle-x** considers only the first one.