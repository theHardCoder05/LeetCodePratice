/**
 * @param {number} capacity
 */
var LRUCache = function(capacity) {
  this.capacity = capacity;
  this.head = new Node(-1, -1);
  this.tail = new Node(-1, -1);
  this.head.next = this.tail;
  this.tail.prev = this.head;
  this.cache = {};
};

/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function(key) {
  if (!this.cache[`${key}`]) return -1;

  let node = this.cache[`${key}`];
  this.remove(node);
  this.add(node);
  
  return node.value;
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function(key, value) {
  if(Object.keys(this.cache).includes(`${key}`)) {
    oldNode = this.cache[`${key}`];
    this.remove(oldNode);
  }

  let newNode = new Node(key, value);
  this.add(newNode);
  this.cache[key] = newNode;

  if(Object.keys(this.cache).length > this.capacity) {
    let evictedNode = this.head.next;
    this.remove(evictedNode);
    delete this.cache[`${evictedNode.key}`];
  }

  return null;
};

LRUCache.prototype.add = function(node) {
  let tmp = this.tail.prev;
  tmp.next = node;
  node.prev = tmp;
  node.next = this.tail;
  this.tail.prev = node;
};

LRUCache.prototype.remove = function(node) {
  node.prev.next = node.next;
  node.next.prev = node.prev;
};

var Node = function(key, value) {
  this.key = key;
  this.value = value;
  this.prev = null;
  this.next = null;
}

/** 
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */