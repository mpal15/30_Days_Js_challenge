// Implement a BinaryTree class with methods for inserting values and performing in-ordertraversal to dispay nodes

class TreeNode{
    constructor(value){
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinaryTree{
    constructor(){
        this.root = null;
    }

    insert(value){
        const newNode = new TreeNode(value);
        if(!this.root){
            this.root = newNode;
        }
        else{
            this._insertRecursively(this.root, newNode);
        }
    }
    _insertRecursively(node,newNode){
        if(newNode.value<node.value){
            if(node.left == null){
                node.left = newNode;
            }else{
                this._insertRecursively(node.left,newNode);
            }
        }else{
            if(node.right == null){
                node.right = newNode;
            }else{
                this._insertRecursively(node.right,newNode);
            }
        }
    }
    
    inOrderTraversal(node = this.root){
        if(node!=null){
            this.inOrderTraversal(node.left);
            console.log(node.value);
            this.inOrderTraversal(node.right);
        }
    }

}

// Example usage
const binaryTree = new BinaryTree();
binaryTree.insert(5);
binaryTree.insert(3);
binaryTree.insert(7);
binaryTree.insert(2);
binaryTree.insert(4);
binaryTree.insert(6);
binaryTree.insert(8);

console.log("In-order Traversal of the Binary Tree:");
binaryTree.inOrderTraversal();  // Output: 2, 3, 4, 5, 6, 7, 8