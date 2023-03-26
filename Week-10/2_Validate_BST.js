class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

function isBST(node, min = null, max = null) {
  if (node === null) {
    return true;
  }

  if (min !== null && node.value <= min) {
    return false;
  }

  if (max !== null && node.value >= max) {
    return false;
  }

  const leftIsValid = isBST(node.left, min, node.value);
  const rightIsValid = isBST(node.right, node.value, max);

  return leftIsValid && rightIsValid;
}

// example usage:
const root = new Node(5);
root.left = new Node(3);
root.right = new Node(7);
root.left.left = new Node(1);
root.left.right = new Node(4);
root.right.left = new Node(6);
root.right.right = new Node(8);

console.log(isBST(root)); // true
