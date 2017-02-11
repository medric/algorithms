/**
* Insights
*  - Efficient information retrieval data structure.
   - Search complexities can be brought to optimal limit (key length)
   - Store keys in BST
   - Node => multiple branches
   - Branch => possible charachter of keys
   - Mark the last node of every key as leaf node
   - Every character of input key is inserted as an individual trie node
   - The key character acts as an index into the array children
   - If the input key is new or an extension of existing key,
     we need to construct non-existing nodes of the key, and mark leaf node
*/
const util = require('util');

function d() {
  console.log.apply(console, arguments);
}

// structure
function getTrieNode() {
  return {
    children:  [],
    isLeaf: false
  };
}

// appending new nodes for suffix
function insert(root = getTrieNode(), key = '') {
  let level = 0, index = 0, node = root;

  while(level < key.length) {
    if (root.children[key[level]]) {
      node = node.children[key[level]];
      level++;
    } else {
      break;
    }
  }

  while(level < key.length) {
    node.children[key[level]] = getTrieNode();
    node = node.children[key[level]];
    level++;
  }

  node.isLeaf = true;
}

let root = getTrieNode();
insert(root, 'foobar');
insert(root, 'foobarsdf');
d(util.inspect(root, {showHidden: false, depth: null}));
