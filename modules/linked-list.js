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
    let currentNode = this.head;

    while (currentNode.nextNode !== this.tail) {
      currentNode = currentNode.nextNode;
    }

    let poppedNode = this.tail;
    currentNode.nextNode = null;
    this.tail = currentNode;

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