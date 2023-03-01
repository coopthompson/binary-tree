class Tree {
    constructor() {
        this.root = new Node
    }


    buildTree(array) {
        let filtArray = removeDuplicates(array);
        let sortedArray = filtArray.sort();
        return assignBranches(sortedArray, this.root);
    }

    insert(data) {
        return traverseAdd(this.root, data);
    }

    delet(data) {

    }

}

class Node {
    constructor() {
        this.data = 'temp'
        this.left = null
        this.right = null
    }

    setData(data) {
        this.data = data
    }

    setLeft(leftChild) {
        this.left = leftChild
    }

    setRight(rightChild) {
        this.right = rightChild
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

function removeDuplicates(array) {
    return array.filter((item, index) => array.indexOf(item) === index);      
}

function assignBranches(array, curNode, rootNode = curNode, leftArr = [], rightArr = []) {

    if (array.length === 0) {
        console.log(rootNode);
        cleanUp(rootNode)
        return;
    }

    if (array.length === 2) {
        const leftNode = new Node
        curNode.left = leftNode
        leftNode.setData(array[0]) 
        curNode.setData(array[1])
        return;
    } 
    
    if (array.length === 1) {
        curNode.setData(array[0]);
        return;
    }
     
    let mid = array[Math.floor(array.length/2)];
    console.log(mid)

    for (let i = 0; i < array.length; i++) {
        if (array[i] < mid) {
            leftArr.push(array[i])
            console.log(leftArr)
        } else if (array[i] > mid) {
            rightArr.push(array[i])
            console.log(rightArr)
        }
    }
        curNode.setData(mid);
        const rightNode = new Node;
        curNode.right = rightNode;
        const leftNode = new Node;
        curNode.left = leftNode;
        prettyPrint(tree1.root);
        assignBranches(leftArr, leftNode, rootNode);
        assignBranches(rightArr, rightNode, rootNode);      
}

function grabData(curNode, dataArray) {
    if (curNode === null) {
        console.log(dataArray)
        return dataArray;
    }

    console.log(curNode)

    dataArray.push(curNode.data)
    console.log(dataArray)


    grabData(curNode.left, dataArray)
    grabData(curNode.right, dataArray);
}

function traverseAdd(curNode, data) {
    if (curNode.left === null && curNode.right === null) {
        const dataNode = new Node;
        dataNode.setData(data);
        if (data < curNode.data) {
            curNode.left = dataNode;
        } else if (data > curNode.data) {
            curNode.right = dataNode;
        }
        return;
    }

    if (data < curNode.data) {
        return traverseAdd(curNode.left, data);
    } else if (data > curNode.data) {
        return traverseAdd(curNode.right, data);
    } else if (data === curNode.data) {
         return "data already included in tree!";
    }
}

function traverseRemove(curNode, data) {
    if (data < curNode.data) {
        return traverseRemove(curNode.left, data);
    } else if (data > curNode.data) {
        return traverseRemove(curNode.right, data);
    } else if (data === curNode.data) {
        if (curNode.left === null && curNode.right === null) {
            curNode.setData(data);
            return;
        } else if (curNode.left === null && curNode.right !== null) {
            curNode.setData(curNode.right.data);
            curNode.setRight(curNode.right.right);
            curNode.setLeft(curNode.right.left)
        } else if (curNode.left !== null && curNode.right === null) {
            curNode.setData(curNode.left.data);
            curNode.setLeft(curNode.left.left);
            curNode.setRight(curNode.left.right);
        } else if (curNode.left !== null && curNode.right !== null) {
            curNode.setData()
        }
    }

}

const tree1 = new Tree

tree1.buildTree([1, 5, 3, 8, 9, 50, 60, 100, 100000, 70, 1000001]);
tree1.insert(100002)
prettyPrint(tree1.root)