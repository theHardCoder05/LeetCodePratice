
 class Trie {
    constructor(str){
    this.root = {};
    this.endSymbol = "*";
    this.populateString(str);

    }

    populateString(str){
        for(let i = 0; i < str.length;i++){
            this.insertString(i, str);
        }
    }

    insertString(i, str){
        let node = this.root;
        for(let j = i; j < str.length; j++){
            const letter = str[j];
            if(!(letter in node)) node[letter] = {};
            node = node[letter];
        }
        return node[this.endSymbol] = true;
    }

    contains(str){
        let node = this.root;
        for(const letter of str){
            if(!(letter in node)) return false;
            node = node[letter];
        }

        return this.endSymbol in node;
    }
}


string ='babc';
var trie = new Trie(string);
var result = trie.contains('david');
console.log(result);