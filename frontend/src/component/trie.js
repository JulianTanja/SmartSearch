function TrieNode(letter) {
    this.letter = letter;
    this.prevLetter = null;
    this.nextLetters = {}; // an object for the following letters
    this.isComplete = false; // check whether letter is last of word

    //methods
    this.getWord = getWord;
    // iterates through nodes to get word prediction
    function getWord() {
        var node = this;
        var wordLetters = [];
        while (node.prevLetter) {
            wordLetters.unshift(node.letter);
            node = node.prevLetter; // set the previous letter as node
        }
        return wordLetters.join("");
    };
}

function TrieAlg() {
    this.root = new TrieNode(null);

    //methods
    this.insert = insert;
    this.contains = contains;
    this.find = find;

    //insert new word in Trie 
    function insert(word) {
        var node = this.root;
        for (let i = 0; i < word.length; i++) {
            const current_letter = word[i];
            if (!node.nextLetters[current_letter]) { // if letter not in next letters
                node.nextLetters[current_letter] = new TrieNode(current_letter); // make it node
                node.nextLetters[current_letter].prevLetter = node; // add it as a child node
            }
            node = node.nextLetters[current_letter]; // reset node to current letter & continue iteration

            if (i === word.length - 1) {
                node.isComplete = true;
            }
        }
    };

    function contains(word) {
        var node = this.root; // set first node to root node
        for (let i = 0; i < word.length; i++) {
            const current_letter = word[i];
            let next_node = node.nextLetters[current_letter];
            if (next_node) { // if letter is one of next letters
                node = next_node; // set it as a next node
            } else {
                return false;
            }
        }
    };

    //find words with similar previous letters
    function find(clues) {
        var node = this.root; //set first node to root node
        var output = [];
        for (let i = 0; i < clues.length; i++) {
            const clues = clues[i];
            let next_node = node.nextLetters[clues];
            if (next_node) {
                node = next_node;
            } else {
                return output;
            }
        }

        findAllWords(node, output);
        return output;

    };

    function findAllWords(node, arr) {
        if(node.isComplete) { // check if node is end node
            arr.unshift(node.getWord()); // get all words and add them to array
          }
      
          // otherwise recursively call the next nodes
          for (var next_letter in node.nextLetters) {
            findAllWords(node.nextLetters[next_letter], arr);
          }
    };




}

export default TrieAlg;