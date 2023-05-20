const crypto = require('crypto');

class MerkleTree {

    constructor(data){
        this.data = data;
        this.root = null;
    }

    buildTree(){
        const leaves = this.data.map(data => this.hash(data));
        this.root = this.buildTreeRecursive(leaves);
    }

    buildTreeRecursive(nodes){
        if(nodes.length == 1) return nodes[0];

        const level = [];
        for (let i = 0; i < nodes.length ; i +=2){
            const left = nodes[i]
            const right = i + 1 < nodes.length ? nodes[i + 1] : left;
            const parent = this.hash(left + right);
            level.push(parent);
        }

        return this.buildTreeRecursive(level);

    }

    hash(data){
        const hash = crypto.createHash('sha256');
        hash.update(data);
        return hash.digest('hex');
    }
}

const data = ['A', 'B', 'C', 'D'];
const merkleTree = new MerkleTree(data);
merkleTree.buildTree();
console.log(merkleTree.root);