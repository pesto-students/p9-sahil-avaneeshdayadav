class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

function levelOrder(root) {
  if (!root) {
    return [];
  }

  const result = [];
  const queue = [root];

  while (queue.length > 0) {
    const levelSize = queue.length;
    const currentLevel = [];

    for (let i = 0; i < levelSize; i++) {
      const currentNode = queue.shift();
      currentLevel.push(currentNode.value);

      if (currentNode.left) {
        queue.push(currentNode.left);
      }

      if (currentNode.right) {
        queue.push(currentNode.right);
      }
    }

    result.push(currentLevel);
  }

  return result;
}

// example usage:
const root = new Node(5);
root.left = new Node(3);
root.right = new Node(7);
root.left.left = new Node(1);
root.left.right = new Node(4);
root.right.left = new Node(6);
root.right.right = new Node(8);

console.log(levelOrder(root)); // [[5], [3, 7], [1, 4, 6, 8]]
