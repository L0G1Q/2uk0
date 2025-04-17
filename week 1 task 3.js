let isTrue = true;
let isFalse = false;


let andResult = isTrue && isFalse;   
let orResult  = isTrue || isFalse;  
let notTrue   = !isTrue;             
let notFalse  = !isFalse;            

console.log("isTrue && isFalse =", andResult);
console.log("isTrue || isFalse =", orResult);
console.log("!isTrue =", notTrue);
console.log("!isFalse =", notFalse);


if (isTrue && !isFalse) {
  console.log("Case 1: isTrue is true AND isFalse is not true");
}

if (isTrue || isFalse) {
  console.log("Case 2: At least one of isTrue/isFalse is true");
} else {
  console.log("Case 2: Neither isTrue nor isFalse is true");
}

if (!andResult) {
  console.log("Case 3: The AND of isTrue and isFalse is false");
}