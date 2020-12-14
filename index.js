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

const validPalindrome = s => {
    const max = s.length
    if (max <= 1) {
        return true
    }

    // let isDelete = false
    for (let i = 0, j = max - 1; i <= j;) {
        const pre = s[i]
        const suf = s[j]

        if (pre == suf) {
        i++
        j--
        continue
        }

        return isPalindrome(s, i + 1, j) || isPalindrome(s, i, j - 1)
    }
    return true
}

function isPalindrome (s, start, end) {
    for (let i = start, j = end; i <= j;) {
        if (s[i] === s[j]) {
        i++
        j--
        continue
        }
        return false
    }
    return true
}
