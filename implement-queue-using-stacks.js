/* IMPLEMENT QUEUE USING STACKS ************************************************
Implement the following operations of a queue using stacks.

push(x) -- Push element x to the back of queue.
pop() -- Removes the element from in front of queue.
peek() -- Get the front element.
empty() -- Return whether the queue is empty.
*******************************************************************************/

var MyQueue = function() {
    this.enqueue = [];
    this.dequeue = [];
};

MyQueue.prototype.push = function(x) {
    this.dequeue.push(x);
};

MyQueue.prototype.pop = function() {
    if (!this.enqueue.length) {
        while(this.dequeue.length) this.enqueue.push(this.dequeue.pop());
    }
    return this.enqueue.pop()
};

MyQueue.prototype.peek = function() {
    if (!this.enqueue.length) {
        while(this.dequeue.length) this.enqueue.push(this.dequeue.pop());
    }
    return this.enqueue[this.enqueue.length - 1];
};

MyQueue.prototype.empty = function() {
    return !this.dequeue.length && !this.enqueue.length;
};
