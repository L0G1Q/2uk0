let intString = "42";
let floatString = "3.14159";


let intValue = parseInt(intString, 10);
console.log(parseInt("${intString}") →, intValue);


let floatValue = parseFloat(floatString);
console.log(parseFloat("${floatString}") →, floatValue);

console.log(parseInt("123abc"));
console.log(parseFloat("4.5xyz"));

let num = 2025;


let str1 = num.toString();
console.log((${ num }).toString() →, str1);

let str2 = num + "";
console.log(${ num } + "" →, str2);


let csv = "apple,banana,cherry,dragonfruit";


let fruits = csv.split(",");
console.log("${csv}".split(",") →, fruits);

let letters = word.split("");
console.log("${word}".split("") →, letters);