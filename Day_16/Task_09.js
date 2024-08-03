// Write a recursive function to perform an in-order traversal of a binary tree, log the nodes as they are visited.

class Node{
    constructor(data){
        this.data = data;
        this.left = null;
        this.right = null;
    }
}
class BinaryTree{
    constructor(){
        this.root = null;
    }
    insert(data){
        const newNode = new Node(data);
        if(!this.root){
            this.root = newNode;
            return this;
        }
        let current = this.root;
        while(true){
            if(data === current.data){
                return undefined;
            }
            if(data <current.data){
                if(!current.left){
                    current.left = newNode;
                    return this;
                }
                current= current.left;
            }else{
                if(!current.right){
                    current.right = newNode;
                    return this;
                }
                current = current.right
            }
        }
    }
    treversal(node = this.root){
      if(node){
        this.treversal(node.left);
        console.log(node.data);
        this.treversal(node.right);
      }
    }
}

const tree = new BinaryTree();
tree.insert(10);
tree.insert(5);
tree.insert(15);
tree.insert(3);
tree.insert(7);
tree.insert(12);
tree.insert(18);

console.log("In order Traversal:");
tree.treversal();