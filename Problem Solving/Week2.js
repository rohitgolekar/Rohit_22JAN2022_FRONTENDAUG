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
    while (sequence.includes(word) === true) {
        word = word + repeatWord
        count++
    }
    console.log(count);
}

maxRepeating(sequence, word);

// https://leetcode.com/problems/split-two-strings-to-make-palindrome/


let a = "ulacfd";
let b = "jizalu";
function checkPalindromeFormation(a, b) {

    let Aprefix = a.split('', 3).join('');
    let Asuffix = a.slice(3);
    let Bprefix = b.split('', 3).join('');
    let Bsuffix = b.slice(3);
    let sortBsuffix = Bsuffix.split('').reverse().join('');

    // console.log(sortBsuffix);
    // console.log(Aprefix, Asuffix, Bprefix, Bsuffix);

    if (Aprefix === sortBsuffix) {
        console.log("This is Palindrom");
    } else {
        console.log("This is Not Palindrom");
    }

}

checkPalindromeFormation(a, b)



// https://practice.geeksforgeeks.org/problems/maximum-value-of-difference-of-a-pair-of-elements-and-their-index/1/


let arr1 = [1, 2, 3, 1];
let i = 0;
let j = 2;
function maxValue(arr1, i, j) {
    let output;
    for (let k = 0; k < arr1.length; k++) {
        output = Math.abs((arr1[i] - arr1[j]) + (i - j));
    }
    console.log(output);
}

maxValue(arr1, i, j);


// https://leetcode.com/problems/largest-substring-between-two-equal-characters/


let str1 = "aa";

function maxLengthBetweenEqualCharacters(str1) {
    // debugger;
    let str = str1.split('');
    let empty = [];

    let toFindDuplicates = str.filter((item, index) => {
        return str.indexOf(item) !== index;
     })
    if (toFindDuplicates != [] && toFindDuplicates.length >= 1) {
        for (let i = 0; i < str.length; i++) {
            if (str.indexOf(str[i]) === str.lastIndexOf(str[str.length - 1])) {
                empty.push(str[i]);
            }
        }
        console.log(empty.length);
    } else {
        console.log(-1);
    }


}

maxLengthBetweenEqualCharacters(str1)