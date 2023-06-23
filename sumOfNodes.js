class Node {
  constructor(value, children = []) {
    this.value = value;
    this.children = children;
  }
}

function sum(node) {
  if (!node) {
    return 0;
  }

  let total = node.value;

  for (const child of node.children) {
    total += sum(child);
  }

  return total;
}

// Example usage:
const tree = new Node(1, [
  new Node(2, [new Node(2, [new Node(2), new Node(3)]), new Node(3)]),
  new Node(3, [new Node(1), new Node(5)]),
]);
console.log(sum(tree)); // returns 22
