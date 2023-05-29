class LRUCache {
    constructor(capacity) {
      this.capacity = capacity;
      this.cache = new Map();
    }
  
    get(key) {
      if (this.cache.has(key)) {
        const value = this.cache.get(key);
        this.cache.delete(key);
        this.cache.set(key, value); // Move the key to the end to mark it as most recently used
        return value;
      }
      return -1;
    }
  
    put(key, value) {
      if (this.cache.has(key)) {
        this.cache.delete(key);
      } else if (this.cache.size >= this.capacity) {
        // If the cache exceeds its capacity, remove the least recently used key
        const firstKey = this.cache.keys().next().value;
        this.cache.delete(firstKey);
      }
      this.cache.set(key, value);
    }
  }
  
  // Usage example
  const cache = new LRUCache(3);
  cache.put(1, 'One');
  cache.put(2, 'Two');
  cache.put(3, 'Three');

  console.log(cache.get(1)); // Output: 'Four'
  