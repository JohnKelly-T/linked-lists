import { LinkedList } from "./modules/linked-list.js";

let list = new LinkedList();

list.append("dog");
list.append("cat");
list.append("parrot");
list.append("hamster");
list.append("snake");
list.append("turtle");
list.prepend("dragon");

console.log("\n==== String version of linked list ====");
console.log(list.toString());

console.log("\n==== list head ====")
console.log(list.head);

console.log("\n==== list tail ====")
console.log(list.tail);

console.log("\n==== Linked List size: ====");
console.log(list.size());

console.log("\n==== Node at index 2: ====");
console.log(list.at(2));

console.log("\n==== Popped Node: ====");
console.log(list.pop());

console.log("\n==== Test if list contains 'dog' ====");
console.log(list.contains('dog'));

console.log("\n==== Test find function for 'parrot'")
console.log(list.find('parrot'));

console.log("\n==== Insert new value 'fish' at index 5 ====");
list.insertAt("fish", 5);
console.log(list.toString());

console.log("\n==== Remove value at index 3 ====");
list.removeAt(0);
console.log(list.toString());
