// console.log("2" > 1);
// console.log("01" >= 1);

//<,>,<=,>= converts null to 0 whereas == doesnt
console.log(null>0); //false
console.log(null==0); //false
console.log(null>=0); //true

console.log(underdefined == 0);
console.log(underdefined >0);
console.log(underdefined <0);

// === it strictly checks values as well as data types

console,log("2" === 2)