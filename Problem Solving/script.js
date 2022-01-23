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



