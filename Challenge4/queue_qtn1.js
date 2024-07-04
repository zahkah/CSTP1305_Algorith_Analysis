var MyStack = function() {
    this.q1 = []; // This will be the main queue for storage
    this.q2 = []; // This will be the temporary queue used for push operations
};

/** 
 * @param {number} x
 * @return {void}
 */
MyStack.prototype.push = function(x) {
    // Push the new element into q2
    this.q2.push(x);
    // Move all elements from q1 to q2
    while (this.q1.length > 0) {
        this.q2.push(this.q1.shift());
    }
    // Swap the names of q1 and q2
    var temp = this.q1;
    this.q1 = this.q2;
    this.q2 = temp;
};

/**
 * @return {number}
 */
MyStack.prototype.pop = function() {
    // Remove the top element from q1
    return this.q1.shift();
};

/**
 * @return {number}
 */
MyStack.prototype.top = function() {
    // Get the front element of q1
    return this.q1[0];
};

/**
 * @return {boolean}
 */
MyStack.prototype.empty = function() {
    // Check if q1 is empty
    return this.q1.length === 0;
};

/** 
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */

// Example Usage:
const myStack = new MyStack();
myStack.push(1);
myStack.push(2);
console.log(myStack.top()); // returns 2
console.log(myStack.pop()); // returns 2
console.log(myStack.empty()); // returns false
