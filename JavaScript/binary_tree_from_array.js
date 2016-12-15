let BinarySearchTree = require('./tree_class')

let BSTfromArray = (array,binarySearchTree) {
  if (array.length === 0) {
    return null
  }

  if (array.length === 1) {
    binarySearchTree.addValue(array[0])
  }

  if (array.length === 2) {
    binarySearchTree.addValue(array[1])
    binarySearchTree.addValue(array[0])
  }

}
