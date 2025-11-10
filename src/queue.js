class Queue {
  constructor() {
    this.head = null; 
    this.tail = null; 
  }

  getUnderlyingList() {
    return this.head;
  }

  enqueue(value) {
    const newNode = { value, next: null }; 
    if (!this.head) { 
      this.head = newNode;
      this.tail = newNode;
    } else { 
      this.tail.next = newNode; 
      this.tail = newNode;     
    }
  }

  dequeue() {
    if (!this.head) return undefined; 
    const value = this.head.value;    
    this.head = this.head.next;     
    if (!this.head) this.tail = null; 
    return value;
  }
}

module.exports = {
  Queue
};
