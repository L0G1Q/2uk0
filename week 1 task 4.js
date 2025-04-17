let numbers = [10, 20, 30, 40, 50];
console.log("Initial array:", numbers);

let thirdElement = numbers[2];
console.log("Element at index 2:", thirdElement);  

numbers.push(60);
console.log("After push(60):", numbers);  
let popped = numbers.pop();
console.log("After pop():", numbers, "(popped value was " + popped + ")");  

numbers.unshift(0);
console.log("After unshift(0):", numbers);  
let shifted = numbers.shift();
console.log("After shift():", numbers, "(shifted value was " + shifted + ")");  
