const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {

  constructor() {
    this.rootNode = null; // Initialize the root of the tree
  }

  root() {
    return this.rootNode; // Return the root of the tree
  }

  add(data) {
    const newNode = new Node(data);

    if (!this.rootNode) {
      this.rootNode = newNode; // If tree is empty, set the root node
    } else {
      this._addNode(this.rootNode, newNode); // Recursively find the correct position
    }
  }

  _addNode(node, newNode) {
    if (newNode.data < node.data) {
      if (!node.left) {
        node.left = newNode; // Add to the left of the node
      } else {
        this._addNode(node.left, newNode); // Continue searching in the left subtree
      }
    } else {
      if (!node.right) {
        node.right = newNode; // Add to the right of the node
      } else {
        this._addNode(node.right, newNode); // Continue searching in the right subtree
      }
    }
  }

  has(data) {
    return this._hasNode(this.rootNode, data); // Start the search from the root
  }

  _hasNode(node, data) {
    if (!node) return false; // If the node doesn't exist, return false

    if (data === node.data) {
      return true; // If the data is found, return true
    }

    if (data < node.data) {
      return this._hasNode(node.left, data); // Search in the left subtree
    } else {
      return this._hasNode(node.right, data); // Search in the right subtree
    }
  }

  find(data) {
    return this._findNode(this.rootNode, data); // Start the search from the root
  }

  _findNode(node, data) {
    if (!node) return null; // If the node doesn't exist, return null

    if (data === node.data) {
      return node; // If the data is found, return the node
    }

    if (data < node.data) {
      return this._findNode(node.left, data); // Search in the left subtree
    } else {
      return this._findNode(node.right, data); // Search in the right subtree
    }
  }

  remove(data) {
    this.rootNode = this._removeNode(this.rootNode, data); // Start from the root
  }

  _removeNode(node, data) {
    if (!node) return null; // If the node doesn't exist, return null

    if (data === node.data) {
      // Case 1: Node has no children
      if (!node.left && !node.right) {
        return null;
      }

      // Case 2: Node has one child
      if (!node.left) {
        return node.right;
      }
      if (!node.right) {
        return node.left;
      }

      // Case 3: Node has two children
      let minNode = this._findMin(node.right); // Find the minimum node in the right subtree
      node.data = minNode.data; // Replace the node's data with the minimum value
      node.right = this._removeNode(node.right, minNode.data); // Remove the duplicate min node
      return node;
    }

    if (data < node.data) {
      node.left = this._removeNode(node.left, data); // Continue searching in the left subtree
    } else {
      node.right = this._removeNode(node.right, data); // Continue searching in the right subtree
    }

    return node; // Return the unchanged node
  }

  min() {
    if (!this.rootNode) return null; // If the tree is empty, return null
    let node = this.rootNode;
    while (node.left) {
      node = node.left; // Keep going left until the smallest node is found
    }
    return node.data; // Return the smallest value
  }

  max() {
    if (!this.rootNode) return null; // If the tree is empty, return null
    let node = this.rootNode;
    while (node.right) {
      node = node.right; // Keep going right until the largest node is found
    }
    return node.data; // Return the largest value
  }
}

module.exports = {
  BinarySearchTree
};