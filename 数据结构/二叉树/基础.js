function BinaryTree() {
    /**
     * 创建
     * @param return [返回根节点]
     */
    var Node = function(key) {
        this.key = key;
        this.left = null;
        this.right = null;
    }
    var root = null;
    var insertNode = function(node, newNode) {
        if (node.key > newNode.key) {
            if (node.left === null)
                node.left = newNode;
            else {
                insertNode(node.left, newNode);
            }
        } else {
            if (node.right === null) {
                node.right = newNode;
            } else {
                insertNode(node.right, newNode);
            }
        }
    }
    this.insert = function(key) {
        var newNode = new Node(key);
        if (root == null)
            root = newNode;
        else
            insertNode(root, newNode);
    };
    // console.log(root);



    /**
     * 中序遍历
     * @param {*} node 
     */
    var inorderTraverseNode = function(node, callback) {
        if (node != null) {
            inorderTraverseNode(node.left, callback);
            callback(node.key);
            inorderTraverseNode(node.right, callback);
        }
    }
    //中序遍历
    this.inOrderTraverse = function(callback) {
        inorderTraverseNode(root, callback);
    }



    //最小节点	
    var minNode = function(node) {
        if (node) {
            while (node.left !== null) {
                return minNode(node.left);
            }
            return node.key;
        }
        return null;
    }
    this.min = function() {
        return minNode(root);
    }
    console.log("最小", this.min)
    //最大节点
    var maxNode = function(node) {
        if (node) {
            while (node.right !== null) {
                return maxNode(node.right);
            }
            return node.key;
        }
        return null;
    }
    this.max = function() {
        return maxNode(root);
    }



    //查找指定值有返回true,没有则返回false
    var searchNode = function(key, node) {
        if (node == null) {
            return false;
        }
        if (node.key > key) {
            return searchNode(key, node.left);
        } else if (node.key < key) {
            return searchNode(key, key.right);
        } else {
            return true;
        }
    }
    this.search = function(key) {
        return searchNode(key, root);
    }
   


    //删除指定的节点
    var removeNode = function(key, node) {
        if (node == null)
            return false;
        if (key < node.key) {
            var node1 = removeNode(key, node.left);
            node.left = node1;
            return node;
        } else if (key > node.key) {
            node.right = removeNode(key, node.right);
        } else {
            if (node.left === null && node.right === null) { //叶子节点的删除
                node = null;
                return node;
            } else if (node.right === null) { //只有左子树的节点删除
                node = node.left;
                return node;
            } else if (node.left === null) { //只有右子树的节点删除
                node = node.right;
                return node;
            } else { //中间节点，既有左子树也有右子树，删除原理：左子树上的所有节点肯定比被删除的节点小，则不需要动，右子树有可能是一群树链，要找到这群树链中的最小值所在的节点，将此最小值赋值给被删除的节点，并删除该最小值所在的节点，这样可以保证被删除的节点后的值肯定比右边的所有节点小，比所有节点大。
                node.key = minNode(node.right);
                removeNode(node.key, node.right);
                return node;

            }
        }
    }
    this.remove = function(key) {
        return removeNode(key, root);
    }
}

var nodes = [8, 3, 10, 1, 6, 14, 4, 7, 13];
var binaryTree = new BinaryTree();
nodes.forEach(function(value, key) {
    binaryTree.insert(value);
});
console.log(binaryTree)


var callback = function(key) {
    console.log(key);
}
binaryTree.inOrderTraverse(callback);


console.log(binaryTree.min());
console.log(binaryTree.max());


console.log(binaryTree.search(4));// false 有问题 ???
console.log(binaryTree.search(100));


binaryTree.remove(3); //删除中间节点
binaryTree.inOrderTraverse(callback);