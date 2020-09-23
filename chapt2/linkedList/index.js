class Node {
  constructor(value = null, next = null) {
    this.value = value;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  prepend(value) {
    let node = new Node(value);

    const oldHead = this.head;

    this.head = node;

    this.head.next = oldHead;
    return this;
  }

  delete(value) {
    let temp = this.head;
    let deleteNode;

    if (temp.value === value) {
      this.head = this.head.next;
      return this;
    }

    while (temp.next) {
      if (temp.next.value === value) {
        console.log("next");
        deleteNode = temp.next;
        temp.next = temp.next.next;
      } else {
        temp = temp.next;
      }
    }

    console.log(deleteNode);
    return deleteNode;
  }

  append(value) {
    let temp;

    if (!this.tail) {
      this.tail = this.head;
    }

    if (!this.head) {
      this.head = new Node(value);
      return this;
    }

    let node = new Node(value);
    temp = this.head;

    while (temp.next) {
      temp = temp.next;
    }

    temp.next = node;

    this.tail = node;
  }
}

const list = new LinkedList();
list.append(4);
list.append(5);
list.append(6);
list.append(7);
list.delete(5);
console.log(list);
