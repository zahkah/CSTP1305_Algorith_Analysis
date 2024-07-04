/**
 * Node class to represent each entry in the cache
 */
class ListNode {
    constructor(key, value) {
        this.key = key;
        this.value = value;
        this.prev = null;
        this.next = null;
    }
}

/**
 * @param {number} capacity
 */
var LRUCache = function(capacity) {
    this.capacity = capacity;
    this.cache = new Map(); 
    this.head = new ListNode(0, 0); 
    this.tail = new ListNode(0, 0); 
    this.head.next = this.tail;
    this.tail.prev = this.head;
};

/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function(key) {
    if (this.cache.has(key)) {
        const node = this.cache.get(key);
        this._moveToHead(node);
        return node.value;
    }
    return -1;
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function(key, value) {
    if (this.cache.has(key)) {
        const node = this.cache.get(key);
        node.value = value;
        this._moveToHead(node);
    } else {
        const newNode = new ListNode(key, value);
        this.cache.set(key, newNode);
        this._addNode(newNode);
        
        if (this.cache.size > this.capacity) {
            const tail = this._popTail();
            this.cache.delete(tail.key);
        }
    }
};

/**
 * Private methods to manage doubly linked list operations
 */
LRUCache.prototype._addNode = function(node) {
    node.prev = this.head;
    node.next = this.head.next;
    
    this.head.next.prev = node;
    this.head.next = node;
};

LRUCache.prototype._removeNode = function(node) {
    const prev = node.prev;
    const next = node.next;
    
    prev.next = next;
    next.prev = prev;
};

LRUCache.prototype._moveToHead = function(node) {
    this._removeNode(node);
    this._addNode(node);
};

LRUCache.prototype._popTail = function() {
    const res = this.tail.prev;
    this._removeNode(res);
    return res;
};

/** 
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key, value)
 */

// Example Usage:
const lruCache = new LRUCache(2);
lruCache.put(1, 1);
lruCache.put(2, 2);
console.log(lruCache.get(1)); // returns 1
lruCache.put(3, 3); // evicts key 2
console.log(lruCache.get(2)); // returns -1 (not found)
lruCache.put(4, 4); // evicts key 1
console.log(lruCache.get(1)); // returns -1 (not found)
console.log(lruCache.get(3)); // returns 3
console.log(lruCache.get(4)); // returns 4
