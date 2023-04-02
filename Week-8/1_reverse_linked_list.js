import { singleList, createSLL, travel } from "./classes.js";
console.log("Problem 7.1 : Reverse Link List");
console.log("Time complexity O(n) and space complexity O(1)");
console.log("Create and display Single Link List");
let arr = [1, 2, 3, 4];
var head = createSLL(arr);
travel(head);

function reverse(head) {
  let previous = null,
    current = head,
    after = null;
  while (current.next != null) {
    after = current.next;
    current.next = previous;
    previous = current;
    current = after;
  }
  current.next = previous;
  head = current;
  return head;
}

console.log("Reverse Link List");
head = reverse(head);
travel(head);
