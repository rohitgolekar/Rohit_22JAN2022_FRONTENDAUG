// https://leetcode.com/problems/check-if-two-string-arrays-are-equivalent/submissions/

// Input: word1 = ["ab", "c"], word2 = ["a", "bc"]
// Output: true
// Explanation:
// word1 represents string "ab" + "c" -> "abc"
// word2 represents string "a" + "bc" -> "abc"
// The strings are the same, so return true.

let word1 = ["abc", "d", "defg"];
let word2 = ["abcddefg"];

function arrayStringsAreEqual(word1, word2) {
    let word1tostr = "";
    let word2tostr = "";

    for (let i = 0; i < word1.length; i++) {
        word1tostr += word1[i];
    }

    for (let j = 0; j < word2.length; j++) {
        word2tostr += word2[j];
    }

    if (word1tostr === word2tostr) {
        console.log(true);
    } else {
        console.log(false);
    }
}

arrayStringsAreEqual(word1, word2)

// https://leetcode.com/problems/maximum-repeating-substring/
// Input: sequence = "ababc", word = "ab"
// Output: 2
// Explanation: "abab" is a substring in "ababc".

let sequence = "ababc";
let word = "ca";

function maxRepeating(sequence, word) {
    // debugger;
    let count = 0;
    let repeatWord = word
    while(sequence.includes(word) === true){
        word = word + repeatWord
        count++
    }
    console.log(count);
}

maxRepeating(sequence, word);