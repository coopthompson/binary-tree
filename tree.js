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
 
        if (root.left == null) {
            let temp = root.right;
            return temp;
        } else if (root.right == null) {
          let temp = root.left;
            return temp;
        }
 
        else {
            let succParent = root;
 
            let succ = root.right;
 
            while (succ.left !== null) {
                succParent = succ;
                succ = succ.left;
            }
 
            if (succParent !== root)
                succParent.left = succ.right;
            else
                succParent.right = succ.right;
 
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

function curLevel(root, levelArr = [], level) {
    if (root === null) {
        return levelArr;
    }
    if (level === 1) {
        levelArr.push(root.data);
    } else if (curLevel > 0) {
        levelOrder(root.left, levelArr, level - 1);
        levelOrder(root.right, levelArr, level -1);
    }

    return levelArr;
}

function levelOrder(root, levelArr = []) {
    let queue = [];
    queue.push(root);
    while (queue.length !== 0) {
        let tempNode = queue.shift();
        levelArr.push(tempNode.data);

        if (tempNode.left !== null) {
            queue.push(tempNode.left);
        }
    
        if (tempNode.right !== null) {
            queue.push(tempNode.right);
        }
    }
    return levelArr;
}

function preOrder(root, preArr = [])
{
    if (root !== null) {
        preArr.push(root.data);
        preOrder(root.left, preArr);
        preOrder(root.right, preArr);  
    }
    return preArr;
}

function inOrder(root, inArr = []) {
    if (root !== null) {
        inOrder(root.left, inArr);
        inArr.push(root.data);
        inOrder(root.right, inArr);
    }
    return inArr;
}

function postOrder (root, postArr = []) {
    if (root !== null) {
        postOrder(root.left, postArr);
        postOrder(root.right, postArr);
        postArr.push(root.data);
    }
    return postArr;
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


