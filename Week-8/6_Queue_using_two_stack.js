console.log("Problem 7.6 : Implement queue using stack");
console.log("Time Complexity O(n) and space complexity o(n)");
class queue {
  constructor() {
    this.stack1 = [];
    this.stack2 = [];
  }
  enQueue(value) {
    while (this.stack1.length !== 0) {
      this.stack2.push(this.stack1.pop());
    }

    this.stack1.push(value);

    while (this.stack2.length !== 0) {
      this.stack1.push(this.stack2.pop());
    }
  }
  deQueue() {
    if (this.stack1.length === 0) {
      return;
    }
    return this.stack1.pop();
  }
}

const que = new queue();
que.enQueue(1);
que.enQueue(2);
que.enQueue(3);
console.log("Dequeue:- ");
console.log(que.deQueue());
console.log(que.deQueue());
console.log(que.deQueue());
