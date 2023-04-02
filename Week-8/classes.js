export class singleList {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

export class Stack {
  constructor() {
    this.item = [];
  }
  push(element) {
    this.item.push(element);
  }
  pop() {
    return this.item.pop();
  }
  peek() {
    return this.item[this.item.length - 1];
  }
  length() {
    return this.item.length;
  }
}

export function createSLL(arr, head) {
  let temp;
  head = new singleList(arr[0]);
  //console.log(head.value);
  let current = head;
  for (let i = 1; i < arr.length; i++) {
    temp = new singleList(arr[i]);
    current.next = temp;
    current = temp;
  }
  return head;
}

export function travel(head) {
  let current = head;
  while (current != null) {
    console.log(current.value);
    current = current.next;
  }
}
