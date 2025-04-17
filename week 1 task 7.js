let str   = "Hello";
let num   = 100;
let bool  = false;
let obj   = { key: "value" };
let arr   = [1, 2, 3];
let undef;
let n      = null;
let func   = function() {};

console.log("typeof str   →", typeof str);    
console.log("typeof num   →", typeof num);    
console.log("typeof bool  →", typeof bool);  
console.log("typeof obj   →", typeof obj);    
console.log("typeof arr   →", typeof arr);    
console.log("typeof undef →", typeof undef);
console.log("typeof n     →", typeof n);      
console.log("typeof func  →", typeof func);   


let a = "5";
let b = 5;

console.log(a == b  →, a == b);   
console.log(a === b →, a === b);  
console.log(0 == false   →, 0 == false);   
console.log(0 === false  →, 0 === false);   
console.log(null == undefined   →, null == undefined);   
console.log(null === undefined  →, null === undefined);  

let falsyValues = [false, 0, "", null, undefined, NaN];
falsyValues.forEach((v) => {
  if (v) {
    console.log(v, "is truthy");
  } else {
    console.log(v, "is falsy");
  }
});

let truthyValues = [true, 1, -1, "0", "false", [], {}, function() {}];
truthyValues.forEach((v) => {
  if (v) {
    console.log(v, "is truthy");
  } else {
    console.log(v, "is falsy");
  }
});