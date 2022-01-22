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

   function sortcolors(arr)
   {
       debugger;
           let length = arr.length;
    
           for (let j = 0; j < length - 1; j++) {
               if (arr[j] > arr[j + 1]) {
                   let temp = arr[j];
                   arr[j] = arr[j + 1];
                   arr[j + 1] = temp;
                   j = -1;
               }
           }
      
           console.log(arr);
   }
    
   let arr=[2,0,2,1,1,0];
   sortcolors(arr);
