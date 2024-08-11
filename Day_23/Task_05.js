// Word Ladder
// Write a function that takes  a begin word, an end word , and a dictionary of words, and find the length of the shortest transformation sequence from the begin word the begin word to end word, such that only one letter can be changed at a time and each transformed word must exist in the word list.
// log the length of the shortest transformation sequence for a few test cases.


function ladderlength(beginWord, endWord, wordList){
    const wordSet = new Set(wordList);
    const queue = [[beginWord,1]];
    while(queue.length>0){
        const [currentWord ,length] = queue.shift();
        if(currentWord === endWord){
            return length;
        }

        for(let i=0;i<currentWord.length;i++){
            const chars = currentWord.split('');
            for(let j = 0;j<26;j++){
                const c = String.fromCharCode(97 + j);
                if(chars[i]!==c){
                    chars[i] = c;
                    const transformedWord = chars.join('');
                    if(wordSet.has(transformedWord)){
                        queue.push([transformedWord,length+1]);
                        wordSet.delete(transformedWord);
                    }
                }
            }
        }
    }
  return 0;
}


// Test cases
const testCases = [
    {
        beginWord: "hit",
        endWord: "cog",
        wordList: ["hot", "dot", "dog", "lot", "log", "cog"],
        expected: 5
    },
    {
        beginWord: "hit",
        endWord: "cog",
        wordList: ["hot", "dot", "dog", "lot", "log"],
        expected: 0
    },
    {
        beginWord: "a",
        endWord: "c",
        wordList: ["a", "b", "c"],
        expected: 2
    },
    {
        beginWord: "a",
        endWord: "b",
        wordList: ["a", "b"],
        expected: 1
    }
];

testCases.forEach((testCase, index) => {
    const length = ladderlength(testCase.beginWord, testCase.endWord, testCase.wordList);
    console.log(`Test Case ${index + 1}: Length = ${length}`);
    console.assert(length === testCase.expected, `Expected length: ${testCase.expected}, Actual length: ${length}`);
});