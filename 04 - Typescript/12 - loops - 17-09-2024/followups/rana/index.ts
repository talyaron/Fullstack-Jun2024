
for (let i=0; i<10; i++){
    console.log(i);
}



const x= ["a","b","c","e","f"];

for (let i=0; i<x.length; i++){
    console.log(x[i]);
}
console.log("done");



for(let elm of x){
    console.log(elm);
}

console.log("done");



for(let i in x){
    console.log(x[i]);
}

const obj={
    a:1,
    b:2,
    c:3,
}
for (let key in obj){
    console.log(key, obj[key]);
}




