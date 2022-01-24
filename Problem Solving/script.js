// https://leetcode.com/problems/merge-sorted-array/

// Input: nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
// Output: [1,2,2,3,5,6]

nums1 = [1, 2, 3, 0, 0, 0];
nums2 = [2, 5, 6];

function margesortarray(nums1, nums2) {
    // debugger;
    let merged = [];
    let i = 0;
    let j = 0;
    let k = 0;
    // console.log(nums1.length + nums2.length)
    while (k < (nums1.length + nums2.length)) {
        let isnums1 = i >= nums1.length;
        let isnums2 = j >= nums2.length;
        if (!isnums1 && (isnums2 || (nums1[i] < nums2[j]))) {
            merged[k] = nums1[i];
            i++;
        } else {
            merged[k] = nums2[j];
            j++
        }
        k++
    }
    console.log(merged);
}

margesortarray(nums1, nums2);



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

let arr = [2,0,2,1,1,0];
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
    for(let i = 0; i < nums.length; i++){
        if(nums[i + 1] === nums[i] + 1){
            count = count + 1;
        }
    }
    console.log(count);
}

sortarray([0,3,7,2,5,8,4,6,0,1]);

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

function subset(arr){
    let empty = [[]];
    for(let i = 0; i < arr.length; i++){
            empty.push([arr[i]]);
            for (let j = i; j < arr.length; j++){
                if(j >= i){
                    empty.push([arr[j], arr[j + 1]]);
                }
            }
    }
    console.log(empty);
}

