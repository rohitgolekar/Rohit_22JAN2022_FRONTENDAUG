// https://leetcode.com/problems/merge-sorted-array/

// Input: nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
// Output: [1,2,2,3,5,6]

nums1 = [1, 2, 3, 0, 0, 0];
nums2 = [2, 5, 6];

function margesortarray(nums1, nums2,m ,n) {
    for(let i = m; i < m + n;){
        for(let j = 0; j < n; j++){
            nums1[i] = nums1[i] + nums2[j];
            i++;
        }
    }
    
    for(let k = 0; k < nums1.length; k++){
        for(let l = k; l < nums1.length; l++){
                if(nums1[k] > nums1[l]){
                    let x = nums1[k];
                    nums1[k] = nums1[l];
                    nums1[l] = x;
                }
        }
    }
    console.log(nums1);
}

margesortarray([1,2,3,0,0,0], [2,5,6], 3, 3);



// const merge = (arr1, arr2) => {
//     let sorted = [];

//     while (arr1.length && arr2.length) {
//       if (arr1[0] < arr2[0]){
//         sorted.push(arr1.shift());
//       } 
//       else {
//           sorted.push(arr2.shift());
//         }
//     };

//     let array = sorted.concat(arr1.slice().concat(arr2.slice()));

//     const finalarray = array.filter(value => {
//         return value !== 0;
//     })

//     console.log(finalarray);
//   };

//   merge([1, 2, 3, 0, 0, 0], [2, 5, 6]);


//   function mergeTwo(arr1, arr2) {
//     let result = [...arr1, ...arr2];
//     let fn = result.sort((a,b) => a-b);
//     let final = fn.filter(value => {
//         return value !== 0;
//     })
//     console.log(final)
//   }

//   mergeTwo([1, 2, 3, 0, 0, 0], [2, 5, 6])


// https://leetcode.com/problems/sort-colors/

// Input: nums = [2,0,2,1,1,0]
// Output: [0,0,1,1,2,2]

function sortcolors(arr) {

    for (let i = 1; i < arr.length; i++) {
        for (let j = 0; j < i; j++) {
            if (arr[i] < arr[j]) {
                var x = arr[i];
                arr[i] = arr[j];
                arr[j] = x;
            }
        }
    }
    console.log(arr);
}

let arr = [2, 0, 2, 1, 1, 0];
sortcolors(arr);


// https://leetcode.com/problems/longest-consecutive-sequence/

function sortarray(nums) {
    count = 1;
    for (let i = 1; i < nums.length; i++) {
        for (let j = 0; j < i; j++) {
            if (nums[i] < nums[j]) {
                var x = nums[i];
                nums[i] = nums[j];
                nums[j] = x;
            }
        }
    }
    for (let i = 0; i < nums.length; i++) {
        if (nums[i + 1] === nums[i] + 1) {
            count = count + 1;
        }
    }
    console.log("count", count);
}

sortarray([0, 3, 7, 2, 5, 8, 4, 6, 0, 1]);


// Input: prices = [7,1,5,3,6,4]
// Output: 7
// Explanation: Buy on day 2 (price = 1) and sell on day 3 (price = 5), profit = 5-1 = 4.
// Then buy on day 4 (price = 3) and sell on day 5 (price = 6), profit = 6-3 = 3.
// Total profit is 4 + 3 = 7.

function maxprofit(prices) {
    let totalProfit = 0;
    let perdayProfit;

    for (let i = 0; i < prices.length; i++) {
        perdayProfit = prices[i + 1] - prices[i];
        if (prices[i + 1] - prices[i] > 0) {
            totalProfit = totalProfit + perdayProfit;
        }
    }
    console.log(totalProfit);
}

maxprofit([7, 1, 5, 3, 6, 4]);


function rightRotate(arr, n) {
    let empty = [];
    for (let i = n - 1; i < arr.length; i++) {
        empty.push(arr[i]);
    }

    for (let j = 0; j < arr.length; j++) {
        if (arr[j] < n) {
            empty.push(arr[j]);
        }
    }
    console.log("empty", empty);
}
rightRotate([1, 2, 3, 4, 5], 3);


// Input: nums = [1,2,3]
// Output: [[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]

function subset(arr) {
    let empty = [[]];
    empty.push(arr);
    for (let i = 0; i < arr.length; i++) {
        empty.push([arr[i]]);
        for (let j = i; j < arr.length; j++) {
            if (arr[j] > arr[i]) {
                empty.push([arr[i], arr[j]]);
            }
        }
    }
    console.log(empty);
}

subset([1,2,3])



// 25 JAN 2022

// https://leetcode.com/problems/kth-largest-element-in-an-array/

var findKthLargest = function (nums, k) {
    let temp;
    for (let a = 0; a < nums.length; a++) {
        for (let b = a; b < nums.length; b++) {
            if (nums[a] < nums[b]) {
                temp = nums[a];
                nums[a] = nums[b]
                nums[b] = temp
            }
        }
    }

    console.log(nums[k - 1]);
};

findKthLargest([3, 2, 1, 5, 6, 4], 2)



// Input: nums = [-1,0,1,2,-1,-4]
// Output: [[-1,-1,2],[-1,0,1]]

nums = [-1, 0, 1, 2, -1, -4]

function threeSum(nums) {
    var results = [];

    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            for (let k = j + 1; k < nums.length; k++) {
                if (nums[i] != nums[j] != nums[k]) {
                    if (nums[i] + nums[j] + nums[k] === 0) {
                        results.push([nums[i], nums[j], nums[k]]);
                        results[results.length - 1]
                    }
                }
            }
        }
    }
    console.log(results);
};

threeSum(nums);


// Input

// AAAA
// BBBBB
// ABABABAB
// BABABA
// AAABBB

// Sample Output

// 3
// 4
// 0
// 0
// 4

function deletions(str) {
    let NoOfDel = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] === str[i + 1]) {
            NoOfDel = NoOfDel + 1;
        }
    }
    console.log(NoOfDel);
}

deletions("AAABBB")



// https://www.hackerrank.com/challenges/special-palindrome-again/problem

let s = "abcbaba";

function palindrom(s) {
    let arr1 = [];

    for (let j = 0; j < s.length; j++) {
        arr1.push(s[j]);
        if (s[j - 1] === s[j + 1]) {
            arr1.push([s[j + 1], s[j], s[j - 1]]);
        }
        if (s[j] === s[j + 1]) {
            arr1.push([s[j++], s[j + 1]]);
        }
    }
    console.log(arr1);
}

palindrom(s);


let emaildata = ["test.email+alex@leetcode.com", "test.e.mail+bob.cathy@leetcode.com", "testemail+david@lee.tcode.com"];


function validEmail(emaildata) {
    let final = [];
    for (let i = 0; i < emaildata.length; i++) {
        let domain = emaildata[i].substring(emaildata[i].lastIndexOf("@"));
        let newemail = emaildata[i].replace(/[,.]/g, '');
        let localname = newemail.substring(0, newemail.lastIndexOf("+"));
        final.push(localname + domain);
    }

    let validemail = [...new Set(final)]
    console.log(validemail.length);
}

validEmail(emaildata);



ratings = [3,0,1];

function candy(ratings){
let candy = 0;

for(let i = 0; i < ratings.length; i++){
        candy = candy + 1;
        if(ratings[i] > ratings[i + 1]){
            candy = candy + 1
        } else if(ratings[i] > ratings[i - 1]){
            candy = candy + 1
        } else if(ratings[i] == ratings[i + 1]){
            candy = candy + 0;
    }
}

console.log("candy", candy);

}

candy(ratings)



