class Node {
    constructor(data) {
        this.data = data;
        this.next = null
    }
}

class Snake {
    constructor(head = null) {
        this.head = head;
    }

    size() {
        let count = [];
        let node = this.head;
        
        while(node) {
            count.push(node.data);
            node = node.next;
        }
        return count;
    }
}

 

var head = new Node(1);
var node2 = new Node(2);
var node3 = new Node(3);

head.next = node2;
node2.next = node3;

var snake = new Snake(head);

console.log(snake.size());

export default snake;