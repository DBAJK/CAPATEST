var scanf = require('scanf');


const fs = require('fs')
var storeName=[];
var postcode =[];
let leng=100;
var location=[,];

while(name == null){
    var name = scanf('%s');
    break;
}

console.log(`name : ${name}`);

let data = fs.readFileSync('./store.json');
const data2 = JSON.parse(data);
leng = data2.store.length;
for(let i=0;i<leng;i++){
    storeName[i] = data2.store[i].name;
    postcode[i] = data2.store[i].postcode;
}

if(storeName[i] === name){
    console.log(`name : ${name}`);
}


while(true){
    //입력
    let num;
    for(num=0;num<leng;num++){
        if(storeName[num]==name){
            break;
        }
    }
    
    if(num!=leng){
        for(let i=0;i<leng;i++){
            if(Math.sqrt(Math.pow(location[i,0]-location[num,0],2)+Math.pow(location[i,1]-location[num,1],2))<100){
                console.log(`
                name    :   ${storeName[i]}
                postcode:   ${postcode[i]}
                atitude:   ${location[i,0]}
                longitude:   ${location[i,1]}
                `)
            }
        }
    }
}