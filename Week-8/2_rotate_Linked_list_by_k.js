import { singleList, createSLL, travel } from "./classes.js";
console.log("Rotate link list");
console.log("Time complexity O(n) and space complexity O(1)");
const arr = [1, 2, 3, 4, 5];
var head = createSLL(arr);
travel(head);

function rotateSLL(head, k) {
  let tail = head;
  let lengthOfList = 1;
  while (tail.next != null) {
    lengthOfList++;
    tail = tail.next;
  }

  let mod = lengthOfList % k;

  if (mod === 0) {
    return head;
  }

  let steps = lengthOfList - mod;
  tail.next = head;

  while (steps--) {
    tail = tail.next;
  }

  var newHead = tail.next;
  tail.next = null;
  head = newHead;
  return head;
}
console.log("After rotate");
head = rotateSLL(head, 3);
travel(head);
