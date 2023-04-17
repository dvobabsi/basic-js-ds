const { NotImplementedError } = require('../extensions/index.js');

// const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class QueueNode {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.n = 0;
  }

  size() {
    return this.n;
  }

  isEmpty() {
    return this.first == null;
  }

  getUnderlyingList() {
    return this.first;
  }

  enqueue(value) {
    let oldLast = this.last;
    this.last = new QueueNode(value);

    if(this.isEmpty()) this.first = this.last;
    else oldLast.next = this.last;

    this.n++;
  }

  dequeue() {
    if(this.isEmpty()) {
      this.last == null;
      return null;
    }

    let itemValue = this.first.value;
    this.first = this.first.next;

    this.n--;

    return itemValue;
  }
}

module.exports = {
  Queue
};
