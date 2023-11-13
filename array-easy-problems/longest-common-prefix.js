//INEFFICIENT SOLUTION:
// var longestCommonPrefix = function (strs) {
//     let i = 0;
//     let temp = ""
//     let temp1 = ""
//     let tempArr = [];

//     if (strs.length === 0) return ""
//     if (strs.length === 1) return strs[0]


//     while (i < strs.length) {
//         if (temp === "") {
//             for (let j = 0; j < strs[i].length; j++) {
//                 temp += strs[i][j]
//             }
//         } else {
//             for (let j = 0; j < strs[i].length; j++) {
//                 console.log("Strs[i", strs[i], i)
//                 if (temp[j] === strs[i][j]) {
//                     temp1 += strs[i][j]
//                 } else {
//                     break;
//                 }
//             }
//             tempArr.push(temp1)
//             temp1 = ""
//         }
//         i++;
//     }
//     console.log("tempArr", tempArr)
//     if (tempArr.length !== 0) {
//         return tempArr[tempArr.length - 1]
//     } else return ""
// };


// EFFICIENT SOLUTION:
var longestCommonPrefix = function (strs) {
    //to sort the strings in alphabetical order
    strs.sort()
    const startString = strs[0];
    const endString = strs[strs.length - 1];

    let temp = ""
    for (let i = 0; i < startString.length; i++) {
        if (startString[i] === endString[i]) {
            temp += startString[i]
        } else break

    }

    return temp
}


// longestCommonPrefix(["flower", "flow", "flight"])
// longestCommonPrefix(["dog","racecar","car"])
// longestCommonPrefix(["cir", "car"])
// longestCommonPrefix(["a","b"])
// longestCommonPrefix(["a"])
// longestCommonPrefix(["",""])
longestCommonPrefix(["aaa", "aa", "aaa"])
// console.log(longestCommonPrefix(["flower","flower","flower","flower"]))




