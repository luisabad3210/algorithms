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

// const findMissingRanges = (nums, lower, upper) => {
//     nums = [lower - 1 , ...nums, upper + 1];
//     let output = [];

//     for (let i = 1; i < nums.length; i++) {
//         if (nums[i] - nums[i - 1] === 2) {
//             output.push((nums[i - 1] + 1).toString())
//         } else if (nums[i] - nums[i - 1] > 2) {
//             output.push(((nums[i - 1] + 1) + '->' + (nums[i] - 1)).toString())
//         }
//     }
//     return output
// };

// console.log(findMissingRanges([], 1, 1)) 


// _________________________________________________
// 463. Island Perimeter

// const islandPerimeter = (grid) => {
//     if (grid.length === 0 || grid[0].length == 0){
//     return 0
//     }

//     let perimeter = 0
    
//     for (i = 0; i < grid.length; i++){
//         for (j = 0; j < grid[0].length; j++){
//             if (grid[i][j] === 1){
//                 perimeter += 4
                
//                 if (i > 0 && grid[i-1][j] === 1){
//                     perimeter -=2
//                 }
//                 if (j > 0 && grid[i][j-1] === 1){
//                     perimeter -=2
//                 }
//             }
//         }
//     }
//     return perimeter
//     };

// console.log(islandPerimeter([[1, 1]]))


// _________________________________________________
// 1694. Reformat Phone Number


// const reformatNumber = number => {
//     number = number.split('').filter((x) => x !== ' ' && x !== '-').join('');

//     if (number.length <= 3) {
//         return number
//     }

//     let num = [];

//     for (let i = 0; i < number.length; i = i + 3) {
//         let x = '';
//         if (number[i] !== undefined) {
//             x += number[i]
//         } 
//         if (number[i + 1] !== undefined) {
//             x += number[i + 1]
//         } 
//         if (number[i + 2] !== undefined) {
//             x += number[i + 2]
//         }
//         num.push(x);
//     }

//     if (num[num.length - 1].length === 1) {
//         let y = num[num.length - 2].slice(0, 2) + '-' + num[num.length - 2].slice(2) + num[num.length - 1]
//         let a = num.slice(0, num.length - 2).concat(y)
//         num = a
//     }

//     return num.join('-')
// };

// console.log(reformatNumber("--17-5 229 35-39475 "));


// _________________________________________________
// 509. Fibonacci Number

// const fib = n => {
//     if(n == 0) {return 0;}
//     if(n == 1) {return 1;}
//     return fib(n - 1) + fib(n - 2)
// };

// console.log(fib(2))


// _________________________________________________
// 1133. Largest Unique Number ]

// const largestUniqueNumber = a => {
//     a = a.sort((a, b) => {return a - b}).reverse()
//     // return a 
//     let largest = 0
//     for (let i = 0; i < a.length; i++) {
//         for (let y = 1; y < a.length; y++) {
//             if (a[i] !== a[y]) {
//                 largest < a[i] ? largest += a[i] : null
//             }
//         }
//     }
//     return largest
// };

// console.log(largestUniqueNumber([5,7,3,9,4,9,8,3,1]))


// _________________________________________________
// 412. Fizz Buzz


// const fizzBuzz = n => {
//     let x = []
//     for (let i = 1; i <= n; i++) {
//         if (i % 3 === 0 && i % 5 === 0) {
//             x.push('FizzBuzz')
//         }
//         else if (i % 3 === 0) {
//             x.push('Fizz')
//         }
//         else if (i % 5 === 0) {
//             x.push('Buzz')
//         }
//         else {
//             x.push(i.toString())
//         }
//     }
//     return x
// };

// console.log(fizzBuzz(15))


// _________________________________________________
// 1086. High Five

// const highFive = items => {
//     let studentObj = {}
//     let averages = []

//     items.forEach(score => {
//         if (studentObj.hasOwnProperty(score[0])) {
//             studentObj[score[0]].push(score[1])
//         }
//         else {
//             studentObj[score[0]] = [score[1]]
//         }
//     })        
//     Object.entries(studentObj).forEach(student => {
//         let sum = 0
//         student[1].sort((a, b) => b - a)
        
//         for (let i = 0; i <= 4; i++) {
//             sum += student[1][i]
//         }
        
//         averages.push([parseInt(student[0]), Math.floor(sum/5)])
//     })
    
//     return averages
// };

// console.log(highFive([[1,100],[7,100],[1,100],[7,100],[1,100],[7,100],[1,100],[7,100],[1,100],[7,100]]))


// _________________________________________________
// 1119. Remove Vowels from a String

// const removeVowels = s => {
//     let vowels = ['a', 'e', 'i', 'o', 'u']

//     let result = ''

//     for (let i = 0; i < s.length; i++) {
//         if (!vowels.includes(s[i])) {
//             result += s[i]
//         }
//     }
//     return result
// };

// console.log(removeVowels("leetcodeisacommunityforcoders"))


// _________________________________________________
// 1108. Defanging an IP Address

// const defangIPaddr = address => address.split('.').join('[.]')

// console.log(defangIPaddr("255.100.50.0"))


// _________________________________________________
// 1678. Goal Parser Interpretation

// const interpret = command => {

//     let result = ''
    
//     for (let i = 0; i < command.length; i++) {
//         if (command[i] === "G") {
//             result += "G"
//         } else if (command[i] === "(" && command[i + 1] === ")" ) {
//             result += 'o'
//         } else if (command[i] === "a" && command[i + 1] === "l" ) {
//             result += 'al'
//         }
//     }

//     return result
// };

// console.log(interpret("G()()()()(al)"));


// _________________________________________________
// 1165. Single-Row Keyboard

// const calculateTime = (keyboard, word) => {
    
//     let time = 0;
//     let prevPos = 0;

//     for(let i = 0; i < word.length; i++){
//             const current = keyboard.indexOf(word[i]);
//             time = time + Math.abs( current - prevPos);
//             prevPos = current;
//     }
//     return time;
// };  

// console.log(calculateTime("pqrstuvwxyzabcdefghijklmno", "leetcode"));


// _________________________________________________
// 1684. Count the Number of Consistent Strings

// const countConsistentStrings = (allowed, words) => {
//     allowed = allowed.split('')
//     let count = 0
//     for (let i = 0; i < words.length; i++) {   
//         let letterCounter = 0
//         for (let j = 0; j < words[i].length; j++) {
//             if (allowed.includes(words[i][j])) {
//                 letterCounter++
//             }
//         }
//         if (words[i].length === letterCounter) {
//             count++
//         }
//     }
//     return count
// };

// console.log(countConsistentStrings("cad", ["cc","acd","b","ba","bac","bad","ac","d"]))


// _________________________________________________
// 1064. Fixed Point


// const fixedPoint = arr => {
    
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] === i) {
//             return arr[i]
//         }
//     }
//     return -1
// };

// console.log(fixedPoint([-10,-5,3,4,7,9]))


// _________________________________________________
// 709. To Lower Case

// const toLowerCase = str => {return str.toLowerCase()}

// console.log(toLowerCase('LuiS'))


// _________________________________________________
// Two Sum

// const twoSum = (nums, target) => {
    
//     for (let i = 0; i < nums.length; i++) {
//         for (let j = 1; j < nums.length; j++) {
//             if (i !== j && nums[i] + nums[j] === target) {
//                 return [i, j]
//             }
//         }
//     }
// };

// console.log(twoSum([2,5,5,11], 10))


// _________________________________________________
// 26. Remove Duplicates from Sorted Array

// const removeDuplicates = nums => {
//     const len = nums.length;
//     for (i = 0; i < len - 1; i++) {
//         if(i > nums.length - 1) {
//         break;
//         }
//         if (nums[i] === nums[i + 1]) {
//         nums.splice(i, 1);
//         i--;
//         }
//     }
    
//     return nums.length;
// };

// console.log(removeDuplicates([1,1,2]))


// _________________________________________________
// 27. Remove Element

// var removeElement = function(nums, val) {
//     let i = 0;

//     while (i < nums.length) {
//         nums[i] === val ? nums.splice(i, 1) : i++;
//     }

//     return nums.length;
// };

// console.log(removeElement([0,1,2,2,3,0,4,2], 2))


// _________________________________________________
// How Many Numbers Are Smaller Than the Current Number

// const smallerNumbersThanCurrent = nums => {
//     let result = []
//     for (let i = 0; i < nums.length; i++) {
//         let current = nums[i]
//         let counter = 0
//         for (let j = 0; j < nums.length; j++) {
//             if (i !== j && current > nums[j]) {
//                 counter++
//             }
//         }
//         result.push(counter)
//     }
//     return result
// };

// console.log(smallerNumbersThanCurrent([6,5,4,8]))


// _________________________________________________
// 1480. Running Sum of 1d Array

// const runningSum = nums => {
//     let result = []
//     for (let i = 1; i < nums.length + 1; i++) {
//         let x = nums.slice(0, i)
//         let sum = 0
//         for (let j = 0; j < x.length; j++) {
//             sum += x[j]
//         }
//         result.push(sum)
//     }

//     return result
// };

// console.log(runningSum([3,1,2,10,1]))

// _________________________________________________
// 27. Remove Element

// const removeElement = (nums, val) => {
//     const len = nums.length;
//     for(i = 0; i < len; i++) {
//         if(i > nums.length - 1) {
//         break;
//         }
//         if (nums[i] === val) {
//         nums.splice(i, 1);
//         i--;
//         }
//     }
//     return nums.length;
// };

// console.log(removeElement([3,2,2,3], 3))


// _________________________________________________
// 1556. Thousand Separator 

// const thousandSeparator = n => {
//     n = n.toString()
//     let value = 0
//     let x = []
    
//     for (let i = n.length - 1; i >= 0 ; i--) {
//         if (value > 0 && value % 3 === 0) {
//             x.push('.')
//             x.push(n[i])
//             value++
//         } else {
//             x.push(n[i])
//             value++
//         }
//     }
//     return x.reverse().join('')
// };

// console.log(thousandSeparator(1234567890));


// _________________________________________________
// 771. Jewels and Stones


const numJewelsInStones = (jewels, stones) => {
    j = jewels.split('')
    let counter = 0

    for (let i = 0; i < stones.length; i++) {
        if (j.includes(stones[i])) {
            counter++
        }
    }
    return counter
};

console.log(numJewelsInStones("z", "ZZ"))