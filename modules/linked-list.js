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