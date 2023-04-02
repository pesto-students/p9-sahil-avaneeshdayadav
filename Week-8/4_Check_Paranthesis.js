import { Stack } from "./classes.js";
console.log("Problem 7.4: Check Parenthesis");
console.log("Time complexity O(n) and space complexity O(n)");

function toCheckParenthesis(arr) {
  const stack1 = new Stack();

  for (let i = 0; i < arr.length; i++) {
    switch (arr[i]) {
      case "{":
        stack1.push(arr[i]);
        break;
      case "(":
        stack1.push(arr[i]);
        break;
      case "[":
        stack1.push(arr[i]);
        break;
      case "]":
        if (stack1.peek() === "[") {
          stack1.pop();
        }
        break;
      case ")":
        if (stack1.peek() === "(") {
          stack1.pop();
        }
        break;
      case "}":
        if (stack1.peek() === "{") {
          stack1.pop();
        }
        break;
    }
  }
  if (stack1.length() != 0) {
    return false;
  } else {
    return true;
  }
}

//array = “[()]{}{()()}”
const arr = ["[", "(", ")", "]", "{", "}", "{", "(", ")", "(", ")", "}"];
console.log("Check Parenthesis" + arr);
const check = toCheckParenthesis(arr);
console.log(check);
