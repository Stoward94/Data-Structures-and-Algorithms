/**
 * Here is an example of the LinkedList data structure.
 * JavaScript isn't the best language for this as it's a
 * memory managed language, however it's very good for
 * explaining the concept of linked 'nodes'.
 *
 * Each node contains it's value and a reference to the next node.
 *   ______       ______
 *  | next | --> | next | --> undefined
 *  |______|     |______|
 *  |value |     |value |
 *  |______|     |______|
 */

/**
 * Represents a linkedlist data structure as a class
 */
class LinkedList {

    /**
     * Creates an empty instance of a LinkedList
     */
    constructor() {
        this.length = 0;
        this.head;
        this.tail;
    }

    /**
     * Push at value on to the end of the list
     * @param {Object} value The object
     */
    push(value) {
        const node = new Node(value);

        if (this.head === undefined) {
            this.head = node;
            this.tail = node;
        } else {
            this.tail.next = node;
            this.tail = node;
        }
        this.length++;
    }

    /**
     * Removes and returns the last element in the list
     * @return {Object}
     */
    pop() {
        if (this.length < 1) return undefined;

        let curNode = this.head;
        let penultimate;

        while (curNode.next !== undefined) {
            penultimate = curNode;
            curNode = curNode.next;
        }

        penultimate.next = undefined;
        this.tail = penultimate;
        this.length--;

        return curNode.value;
    }

    /**
     * Returns the value at given index if it exists
     * @param {Number} index
     * @return {Object} Returns the item in the list or undefined
     */
    get(index) {

        if (index > this.length) return undefined;

        let curNode = this.head;

        let i = 0;

        while (i < index) {
            i++;
            curNode = curNode.next;
        }

        return curNode.value;
    }

    /**
     * Deletes the node at the given index
     * @param {Number} index
     */
    delete(index) {

        if (index > this.length) return;

        if (index === 0) {
            this.head = this.head.next;
        } else {
            let prevNode = this.head;
            let curNode = this.head;

            let i = 0;

            while (i < index) {
                i++;
                prevNode = curNode;
                curNode = curNode.next;
            }

            prevNode.next = curNode.next;
            curNode = undefined;
        }

        this.length--;
    }
};

/**
 * An element that is used to `link` the elements in a `LinkedList`
 */
class Node {

    /**
     * @param {Object} value
     */
    constructor(value) {
        this.value = value;
        this.next;
    }
}


const letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g'];
const list = new LinkedList();

letters.forEach((l) => list.push(l));

console.log(list.get(0)); // a
console.log(list.get(2)); // c
console.log(list.length); // 7

list.delete(0);
console.log(list.get(0)); // b

console.log(list.head.value); // b
console.log(list.tail.value); // g

list.push('h');
console.log(list.tail.value); // h
list.pop();
console.log(list.tail.value); // g

