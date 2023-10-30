var longestCommonPrefix = function (strs) {
    let i = 0;
    let temp = ""
    let temp1 = ""
    let tempArr = [];

    if (strs.length === 0) return ""
    if (strs.length === 1) return strs[0]


    while (i < strs.length) {
        if (temp === "") {
            for (let j = 0; j < strs[i].length; j++) {
                temp += strs[i][j]
            }
        } else {
            for (let j = 0; j < strs[i].length; j++) {
                console.log("Strs[i", strs[i], i)
                if (temp[j] === strs[i][j]) {
                    temp1 += strs[i][j]
                } else {
                    break;
                }
            }
            tempArr.push(temp1)
            temp1 = ""
        }
        i++;
    }
    console.log("tempArr", tempArr)
    if (tempArr.length !== 0) {
        return tempArr[tempArr.length - 1]
    } else return ""
};

longestCommonPrefix(["flower", "flow", "flight"])
// longestCommonPrefix(["dog","racecar","car"])
// longestCommonPrefix(["cir","car"])
// longestCommonPrefix(["a","b"])
// longestCommonPrefix(["a"])
// longestCommonPrefix(["",""])
// longestCommonPrefix(["aaa", "aa", "aaa"])




