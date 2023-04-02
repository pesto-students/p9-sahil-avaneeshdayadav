import { Stack } from "./classes.js";
console.log("Problem 7.5 : Next greater element");
console.log("Time Complexity O(n) and space complexity o(n)");
const arr = [4, 5, 2, 9, 7, 8];

function nextGreaterElement(arr) {
  const stack1 = new Stack();
  const output = new Array(arr.length);
  stack1.push(arr[0]);

  for (let i = 1; i < arr.length; i++) {
    while (stack1.length() != 0 && stack1.peek() < arr[i]) {
      var d = stack1.pop();
      output[arr.indexOf(d)] = arr[i];
    }

    stack1.push(arr[i]);
  }

  while (stack1.length() != 0) {
    d = stack1.pop();
    output[arr.indexOf(d)] = -1;
  }

  console.log(output);
}

console.log("Input : " + arr);
console.log("Next greater element");
nextGreaterElement(arr);
