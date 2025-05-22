# JavaScript Linked List Implementation

This project is a hands-on implementation of a **Linked List** data structure in JavaScript, developed as part of **The Odin Project's** curriculum. It provides a fundamental understanding of how linked lists work, including node management, traversal, insertion, deletion, and various utility operations.

## Features

* **Node-based Storage:** Stores data in individual nodes, each containing a value and a reference (pointer) to the next node.
* **Dynamic Size:** Can grow or shrink as needed, unlike arrays with fixed sizes.
* **Core Linked List Operations:**
    * `append(value)`: Adds a new node containing `value` to the end of the list.
    * `prepend(value)`: Adds a new node containing `value` to the beginning of the list.
    * `size()`: Returns the total number of nodes in the list.
    * `head()`: Returns the first node in the list.
    * `tail()`: Returns the last node in the list.
    * `at(index)`: Returns the node at the given `index`.
    * `pop()`: Removes the last node from the list.
    * `contains(value)`: Returns `true` if the passed-in `value` is in the list, otherwise `false`.
    * `find(value)`: Returns the index of the node containing `value`, or `null` if not found.
    * `toString()`: Represents your LinkedList objects as strings (e.g., `(value) -> (value) -> (value) -> null`).
    * `insertAt(value, index)`: Inserts a new node with `value` at the given `index`.
    * `removeAt(index)`: Removes the node at the given `index`.

## How it Works

A linked list is composed of a series of connected **nodes**. Each node typically has two parts:
1.  **Data (or Value):** The actual information stored in the node.
2.  **Next Pointer:** A reference (or link) to the next node in the sequence. The last node's pointer usually points to `null`.

The list itself maintains a reference to its `head` (the first node) and sometimes its `tail` (the last node).

Operations like `append` involve traversing to the end of the list and updating the `next` pointer of the current last node. `prepend` simply creates a new node and sets its `next` pointer to the current `head`, then updates the list's `head`. `insertAt` and `removeAt` require finding the correct preceding node and adjusting its `next` pointer to bypass or include a new node.

---

## Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

* Node.js (for running JavaScript outside a browser environment, highly recommended for testing)

### Installation

1.  **Clone the repository:**
    ```bash
    git clone git@github.com:JohnKelly-T/linked-lists.git
    ```
2.  **Navigate to the project directory:**
    ```bash
    cd linked-lists
    ```

### Usage

You can interact with the linked list implementation by importing and instantiating it in your JavaScript files.

**Example:**

```javascript
import { LinkedList } from "./modules/linked-list.js";

const myList = new LinkedList();

myList.append(10); // List: (10) -> null
myList.append(20); // List: (10) -> (20) -> null
myList.prepend(5); // List: (5) -> (10) -> (20) -> null

console.log(myList.size());     // Output: 3
console.log(myList.head().value); // Output: 5
console.log(myList.tail().value); // Output: 20
console.log(myList.at(1).value);  // Output: 10

console.log(myList.contains(10)); // Output: true
console.log(myList.find(20));     // Output: 2 (index)
console.log(myList.toString());   // Output: (5) -> (10) -> (20) -> null

myList.pop(); // Removes 20. List: (5) -> (10) -> null
console.log(myList.toString()); // Output: (5) -> (10) -> null

myList.insertAt(15, 1); // List: (5) -> (15) -> (10) -> null
console.log(myList.toString()); // Output: (5) -> (15) -> (10) -> null

myList.removeAt(0); // Removes 5. List: (15) -> (10) -> null
console.log(myList.toString()); // Output: (15) -> (10) -> null
```

Run using
```bash
node index.js
```
