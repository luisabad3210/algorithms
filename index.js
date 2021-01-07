// console.log('hello world')

// 136. Single Number
// const singleNumber = (nums) => {
//     let result = 0
//     for (let i = 0; i < nums.length; i++) {
//         result ^= nums[i]
//     }
//     return result
// };
// console.log(singleNumber([4,1,2,1,2]));

// _________________________________________________

// 1619. Mean of Array After Removing Some Elements
// const trimMean = arr => {
//     arr = arr.sort((a, b) => {return a - b})
//     let percent = arr.length * 0.05;
//     let array = arr.splice(percent, arr.length - (percent * 2));
//     console.log(array)
    
//     let len = array.length;
//     let sum = 0
//     for (let i = 0; i < len; i++) {
//         sum += array[i]
//     }
//     return (sum / len).toFixed(5)
// };

// console.log(trimMean([4,8,4,10,0,7,1,3,7,8,8,3,4,1,6,2,1,1,8,0,9,8,0,3,9,10,3,10,1,10,7,3,2,1,4,9,10,7,6,4,0,8,5,1,2,1,6,2,5,0,7,10,9,10,3,7,10,5,8,5,7,6,7,6,10,9,5,10,5,5,7,2,10,7,7,8,2,0,1,1]))


// _________________________________________________


// 680. Valid Palindrome II

// const validPalindrome = s => {
//     const max = s.length
//     if (max <= 1) {
//         return true
//     }

//     // let isDelete = false
//     for (let i = 0, j = max - 1; i <= j;) {
//         const pre = s[i]
//         const suf = s[j]

//         if (pre == suf) {
//         i++
//         j--
//         continue
//         }

//         return isPalindrome(s, i + 1, j) || isPalindrome(s, i, j - 1)
//     }
//     return true
// }

// function isPalindrome (s, start, end) {
//     for (let i = start, j = end; i <= j;) {
//         if (s[i] === s[j]) {
//         i++
//         j--
//         continue
//         }
//         return false
//     }
//     return true
// }


// _________________________________________________
// 88. Merge Sorted Array

// const merge = (nums1, m, nums2, n) => {
//     let tracker = n;
//     let count = 0;

//     for (let i = 0; i < nums1.length; i++) {
//         if (i + 1 > m && tracker > 0) {
//             nums1[i] = nums2[count]
//             count++;
//             tracker--;
//         }
//     }
//     return nums1.sort((a, b) => a - b)
// };

// console.log(merge([1,2,3,0,0,0], 3, [2,5,6], 3));


// _________________________________________________
// 824. Goat Latin

// const toGoatLatin = s => {

//     s = s.split(' ');
//     let vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
//     let result = []
//     let x = 'a'
//     for (let i = 0; i < s.length; i++) {
//         let first = s[i][0]
//         if (vowels.includes(first)) {
//             result.push(s[i] + 'ma' + x)
//         } else {
//             let word = s[i].slice(1)
//             result.push(word + first + 'ma' + x)
//         }
//         x += 'a'
//     }
//     return result.join(' ')
// };

// console.log(toGoatLatin("The quick brown fox jumped over the lazy dog"))



// _________________________________________________
// 1200. Minimum Absolute Difference

// const minimumAbsDifference = arr => {
//     let array = arr.sort((a,b) => {return b - a})

//     let difference = []

//     for ( let i = 0; i < array.length - 1; i++ ) {
//         difference.push(array[i] - array[i + 1])
//     }
//     let min = Math.min.apply(Math, difference)

//     let result = []

//     for (let i = 0; i < array.length - 1; i++) {
//         if (array[i] - array[i + 1] === min) {
//             result.push(([array[i], array[i + 1]]).reverse())
//         }
//     }
//     return result.reverse()
// };

// console.log(minimumAbsDifference([3,8,-10,23,19,-4,-14,27]))


// _________________________________________________
// 929. Unique Email Addresses

// const numUniqueEmails = emails => {

//     let result = []

//     for (let i = 0; i < emails.length; i++) {
//         let domain = emails[i].slice(emails[i].indexOf('@'))
//         let local = emails[i].slice(0, emails[i].indexOf('@')).split('').filter((x)=>{return x !== '.'});

        
//         if (local.includes('+')) {
//             local = local.slice(0, local.indexOf('+')).join('')
//             !result.includes(local + domain) ? result.push(local + domain) : null
//         } else {
//             !result.includes(local.join('') + domain) ? result.push(local.join('') + domain) : null
//         }

//     }
//     return result.length
// };

// console.log(numUniqueEmails(["test.email+alex@leetcode.com", "test.email@leetcode.com"]))


// _________________________________________________
// 14. Longest Common Prefix


// function longestCommonPrefix(strs) {
//     if (!strs.length) return '';
    
//     for (let i = 0; i < strs[0].length; i++) {
//         for (let str of strs) {
//             if (str[i] !== strs[0][i]) {
//                 return str.slice(0, i);
//             }
//         }
//     }
    
//     return strs[0];
// }

// console.log(longestCommonPrefix(["flower","flow","flight"]))


// _________________________________________________
// 14. Longest Common Prefix


// const moveZeroes = nums => {
//     let checked = 0;
//     for(let i=0;i<nums.length;i++){
//         if(nums[i]===0){
//             nums.splice(i,1);
//             i--;
//             nums.push(0)
//         }
//         checked++;
//         if(checked === nums.length) break;
//     };
// };

// _________________________________________________
// 163. Missing Ranges

const findMissingRanges = (nums, lower, upper) => {
    nums = [lower - 1 , ...nums, upper + 1];
    let output = [];

    for (let i = 1; i < nums.length; i++) {
        if (nums[i] - nums[i - 1] === 2) {
            output.push((nums[i - 1] + 1).toString())
        } else if (nums[i] - nums[i - 1] > 2) {
            output.push(((nums[i - 1] + 1) + '->' + (nums[i] - 1)).toString())
        }
    }
    return output
};

console.log(findMissingRanges([], 1, 1)) 
