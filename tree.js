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
        this.data = null
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

function assignBranches(array, curNode, leftArr = [], rightArr = []) {
    
    if (array.length === 2) {
        const leftNode = new Node
        curNode.left = leftNode
        leftNode.setData(array[0]) 
        curNode.setData(array[1])
        return;
    } 
    
    if (array.length === 1) {
        curNode.setData(array[0])
        return;
    }
     

    let mid = array[Math.floor(array.length/2)];

    for (let i = 0; i < array.length; i++) {
        if (array[i] < mid) {
            leftArr.push(array[i])
        } else if (array[i] > mid) {
            rightArr.push(array[i])
        }
    }

    curNode.setData(mid);
    const rightNode = new Node;
    curNode.right = rightNode;
    const leftNode = new Node;
    curNode.left = leftNode;
    assignBranches(leftArr, leftNode);
    assignBranches(rightArr, rightNode);
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

function traverseRemove() {
    
}






const tree1 = new Tree

tree1.buildTree([2,1,3,2,8, 5,7, 6, 6, 6 ,7 ,90]);

tree1.insert(3)
prettyPrint(tree1.root)

