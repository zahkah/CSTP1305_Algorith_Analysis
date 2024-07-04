var MyQueue = function() {
    this.inStack = [];  // Stack for enqueue operations
    this.outStack = []; // Stack for dequeue operations
};

/** 
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function(x) {
    this.inStack.push(x); // Push element to the back of the inStack, acting as the queue's rear
};

/**
 * @return {number}
 */
MyQueue.prototype.pop = function() {
    if (this.outStack.length === 0) {
        // Move all elements from inStack to outStack to reverse the order
        while (this.inStack.length !== 0) {
            this.outStack.push(this.inStack.pop());
        }
    }
    // The element at the top of outStack is the front of the queue
    return this.outStack.pop();
};

/**
 * @return {number}
 */
MyQueue.prototype.peek = function() {
    if (this.outStack.length === 0) {
        // Move all elements from inStack to outStack to reverse the order
        while (this.inStack.length !== 0) {
            this.outStack.push(this.inStack.pop());
        }
    }
    // Peek the element at the top of outStack, which is the front of the queue
    return this.outStack[this.outStack.length - 1];
};

/**
 * @return {boolean}
 */
MyQueue.prototype.empty = function() {
    // The queue is empty if both stacks are empty
    return this.inStack.length === 0 && this.outStack.length === 0;
};

/** 
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */

// Example Usage:
const myQueue = new MyQueue();
myQueue.push(1);
myQueue.push(2);
console.log(myQueue.peek()); 
console.log(myQueue.pop());   
console.log(myQueue.empty()); 
