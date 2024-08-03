//  Write a recursive function to calculate the depth of a binary tree, Log the resut for a few test case

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
    depth(node = this.root){
        if(!node) 
            {return 0;}
        const leftDepth = this.depth(node.left);
        const rightDepth = this.depth(node.right);
        return Math.max(leftDepth,rightDepth)+1;
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

console.log("depth of tree",tree.depth());

