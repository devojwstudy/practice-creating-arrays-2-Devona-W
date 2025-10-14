//Task 1 Initialize the array
let emptyArray = Array(7);
let filledArray = emptyArray.fill("Hello");
console.log(filledArray);
//Task 2 Update the array
let updatedArray = filledArray.fill("Hi",4,7);
console.log(updatedArray);
//Task 3 Populate the array with a for loop
let numbers = Array(5);
for (let i=0;i<numbers.length;i++){
    numbers[i] = i * 10;

}
console.log(numbers);