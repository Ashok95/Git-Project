//Array Functions

/*
let val = [4,8,1,2,9]
console.log(val);
val= val.map(x => x*2);
console.log(val);
*/

/*let val = new Array(100);
let val = Array(100).fill().map(Math.random);
console.log(val);*/

let val = [2, 5, 3, 8, 9];
let val2 = [1, 4, 6, 7];

const combined = val.concat(val2);

val = val.reduce((a, b) => (b > a ? b : a));
console.log(val);

const address = {
  street: "nagannapelm",
  city: "",
  country: "",
};

const { street: st } = address;
console.log(st);

const first = { firstName: "ashok" };
const second = { lastName: "rathikrindi" };

//const combined = { ...first, ...second };
//const combined = first.concat(second);
console.log(combined);
