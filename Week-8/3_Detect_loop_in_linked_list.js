import { singleList, createSLL, travel } from "./classes.js";
console.log("Detect Loop In Link List");
console.log("Time complexity O(n) and space complexity O(1)");

const arr = [1, 8, 3, 4];

var head = createSLL(arr);
travel(head);

function createLoop(head) {
  let current = head;
  //current = current.next;
  let previous = current.next;
  while (current.next != null) {
    current = current.next;
  }
  current.next = previous;
  return head;
}

function travelLoop(head) {
  let current = head;
  let k = 5;
  while (k--) {
    console.log(current.value);
    current = current.next;
  }
}

function detectLoop(head) {
  let current = head;
  let fast = head.next;
  while (current && fast) {
    current = current.next;
    fast = fast.next.next;
    if (current.value == fast.value) {
      return true;
    }
  }
}
console.log(
  "Create Loop and Travel Loop 1- 8 -3 -4 and then 4 is connected to 8"
);
head = createLoop(head);
travelLoop(head);
console.log("Detected Loop True or False");
console.log(detectLoop(head));
