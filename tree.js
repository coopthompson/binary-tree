// JavaScript program to print BST in given range
// A binary tree node
class Node
{
    constructor(d)
    {
        this.data = d;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor(arr) {
        let sortedArray = removeDupes(arr.sort())
        this.root = this.buildTree(sortedArray, 0, sortedArray.length - 1);
    }

    buildTree(arr, start, end) {
        if (start > end) {
            return null;
        }

        let mid = parseInt((start + end) / 2);
        let node = new Node(arr[mid]);

        node.left = this.buildTree(arr, start, mid - 1);
        node.right = this.buildTree(arr, mid + 1, end);

        return node;
    }

    find(value, root = this.root) {
        if (root == null || root.data == value) {
            return root;
        }
            
 
        if (root.data < value) {
            return this.find(value, root.right);

        }
        return this.find(value, root.left);
    }

    insert(value, root = this.root) {
        if (root === null) {
            return new Node(value);
        }
  
        if (value < root.data) {
            root.left = this.insert(value, root.left);
        } else if (value > root.data) {
            root.right = this.insert(value, root.right);
        }
  
        return root;
    }

    delete(value, root = this.root) {
        if (root == null)
            return root;

        if (root.data > value) {
            root.left = this.delete(value, root.left);
            return root;
        } else if (root.data < value) {
            root.right = this.delete(value, root.right);
            return root;
        }
 
        // We reach here when root is the node
        // to be deleted.
 
        // If one of the children is empty
        if (root.left == null) {
            let temp = root.right;
            return temp;
        } else if (root.right == null) {
          let temp = root.left;
            return temp;
        }
 
        // If both children exist
        else {
            let succParent = root;
 
            // Find successor
            let succ = root.right;
 
            while (succ.left !== null) {
                succParent = succ;
                succ = succ.left;
            }
 
            // Delete successor. Since successor
            // is always left child of its parent
            // we can safely make successor's right
            // right child as left of its parent.
            // If there is no succ, then assign
            // succ->right to succParent->right
            if (succParent !== root)
                succParent.left = succ.right;
            else
                succParent.right = succ.right;
 
            // Copy Successor Data to root
            root.data = succ.data;
 
            return root;
        }
    }
}


 
const prettyPrint = (node = tree.root, prefix = '', isLeft = true) => {
    if (node.right !== null) {
        prettyPrint(node.right, `${prefix}${isLeft ? '│   ' : '    '}`, false);
    }
    console.log(`${prefix}${isLeft ? '└── ' : '┌── '}${node.data}`);
    if (node.left !== null) {
        prettyPrint(node.left, `${prefix}${isLeft ? '    ' : '│   '}`, true);
    }
}

function preOrder(node, preArr = [])
{

    if (node === null)
    {
        let newArr = preArr
        return newArr;
    }
    preArr.push(node.data);
    preOrder(node.left, preArr);
    return preOrder(node.right, preArr);
}

function inOrder(root)
{
    let minv = root.data;
        while (root.left !== null)
        {
            minv = root.left.data;
            root = root.left;
        }
        return minv;
}

function removeDupes(arr) {
    let uniqueNumb = [];
    arr.forEach((c) => {
        if (!uniqueNumb.includes(c)) {
            uniqueNumb.push(c);
        }
    });
    return uniqueNumb;
}

const tree = new BinarySearchTree([1, 2, 3, 4, 5, 6, 7, 8, 9]);

prettyPrint()





