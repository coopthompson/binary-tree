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
}

 
const prettyPrint = (node, prefix = '', isLeft = true) => {
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
    if (node == null)
    {
        let newArr = preArr
        return newArr;
    }
    preArr.push(node.data);
    preOrder(node.left, preArr);
    return preOrder(node.right, preArr);
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

const root = new BinarySearchTree([1,2,3,4,5,6,7,8,9]);
prettyPrint(root.root);
console.log(preOrder(root.root));
