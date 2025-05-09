import { Node } from "./node.js";

export class LinkedList {
  constructor () {
    this.head = null;
    this.tail = null;
  }

  append(value) {
    // create new node
    let newNode = new Node();
    newNode.value = value;

    if (this.head === null) {
      this.head = newNode;
      this.tail = newNode;
      return;
    }

    let currentNode = this.head;

    while (currentNode.nextNode !== null) {
      currentNode = currentNode.nextNode;
    }

    currentNode.nextNode = newNode;
    this.tail = newNode;
  } 

  prepend(value) {
    let newNode = new Node();
    newNode.value = value;
    newNode.nextNode = this.head;
    this.head = newNode;
  }

  size() {
    let count = 0;

    let currentNode = this.head;

    while (currentNode) {
      count += 1;
      currentNode = currentNode.nextNode;
    }

    return count;
  }

  at(index) {
    let currentNode = this.head;

    for (let i = 0; i < index; i++) {
      currentNode = currentNode.nextNode;
    }

    return currentNode;
  }

  pop() {
    if (this.head === null) return;
    let currentNode = this.head;
    let prevNode = this.head;

    while (currentNode.nextNode !== null) {
      prevNode = currentNode;
      currentNode = currentNode.nextNode;
    }

    let poppedNode = currentNode;

    if (currentNode === prevNode) {
      this.head = null;
      this.tail = null;
      return poppedNode;
    }
    
    prevNode.nextNode = null;
    this.tail = prevNode;

    return poppedNode;
  }

  contains(value) {
    let currentNode = this.head;

    while (currentNode.nextNode !== null) {
      if (value === currentNode.value) {
        return true;
      }

      currentNode = currentNode.nextNode;
    }

    return false;
  }

  find(value) {
    let currentNode = this.head;
    let index = 0;

    while (currentNode.nextNode !== null) {
      if (value === currentNode.value) {
        return index;
      }

      currentNode = currentNode.nextNode;
      index += 1;
    }

    return null;
  }

  insertAt(value, index) {
    if (index === 0) {
      this.prepend(value);
      return;
    }

    let listSize = this.size();

    if (listSize === index) {
      this.append(value);
      return;
    }

    if (listSize < index || index < 0) {
      console.log("Error: index out of bounds");
      return;
    }

    let newNode = new Node();
    newNode.value = value;

    let currentNode = this.head;
    let prevNode;

    for (let i = 0; i < index; i++) {
      prevNode = currentNode;
      currentNode = currentNode.nextNode;
    }

    prevNode.nextNode = newNode;
    newNode.nextNode = currentNode;
  }

  removeAt(index) {
    let listSize = this.size();

    if (index < 0 || index >= listSize) {
      console.log("Error: index out of bounds");
      return;
    }

    if (index === 0) {
      this.head = this.head.nextNode;
      return;
    }

    let currentNode = this.head;
    let prevNode;

    for (let i = 0; i < index; i++) {
      prevNode = currentNode;
      currentNode = currentNode.nextNode;
    }

    prevNode.nextNode = currentNode.nextNode;
  }

  toString() {
    let currentNode = this.head;
    let outputString = '';

    while (currentNode) {
      outputString += `( ${currentNode.value} ) -> `;
      currentNode = currentNode.nextNode;
    }

    outputString += 'null';

    return outputString;
  }
}