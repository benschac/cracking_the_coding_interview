function Node(val, next = null) {
  this.val = val;
  this.next = next;
}

function removeDupesBuffer(node) {
  const head = node;
  const cache = {};
  let prevNode;
  // 1 --> 2 --> 2 --> 4
  while (node.next) {
    if (!cache[[node.val]]) {
      cache[[node.val]] = true;
      prevNode = node;
      node = node.next;
    } else {
      while (cache[[node.val]]) {
        node = node.next;
      }
      prevNode.next = node;
    }
  }

  if (cache[[node.val]]) {
    prevNode.next = null;
    return head;
  } else {
    return head;
  }
}
let node6 = new Node(5, null);
let node5 = new Node(5, node6);
let node4 = new Node(4, node5);
let node3 = new Node(2, node4);
let node2 = new Node(2, node3);
let node1 = new Node(1, node2);

function printNodeValues(node) {
  while (node.next) {
    console.log(node.val);
    node = node.next;
  }

  console.log(node.val);
}

function removeDupes(head) {
  let current = head;

  while (current !== null) {
    let runner = current;

    while (runner.next !== null) {
      if (current.val === runner.next.val) {
        console.log({ current, runner });
        runner.next = runner.next.next;
      } else {
        runner = runner.next;
      }
    }

    current = current.next;
  }

  return head;
}
// printNodeValues(removeDupes(node1));
printNodeValues(removeDupes(node1));
// removeDupes(node1);
