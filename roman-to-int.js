var romanToInt = function (s) {
    const tempArr = [];
    const dataDictionary = {
        //possible combinations
        I: 1,
        IV: 4,
        IX: 9,
        V: 5,
        L: 50,
        D: 500,
        M: 1000,
        X: 10,
        XL: 40,
        XC: 90,
        C: 100,
        CD: 400,
        CM: 900,
    }

    let convertedInteger = 0;

    for (let i = 0; i < s.length; i++) {
        if (s[i] === "I") {
            if (s[i + 1] === "V") {
                tempArr.push(dataDictionary["IV"]);
                i++
            }
            else if (s[i + 1] === "X") {
                tempArr.push(dataDictionary["IX"]);
                i++
            }
            else {
                tempArr.push(dataDictionary["I"]);
            }

        }
        else if (s[i] === "X") {
            if (s[i + 1] === "L") {
                tempArr.push(dataDictionary["XL"]);
                i++
            }
            else if (s[i + 1] === "C") {
                tempArr.push(dataDictionary["XC"]);
                i++
            }
            else {
                tempArr.push(dataDictionary["X"]);
            }
        }
        else if (s[i] === "C") {
            if (s[i + 1] === "D") {
                tempArr.push(dataDictionary["CD"]);
                i++
            }
            else if (s[i + 1] === "M") {
                tempArr.push(dataDictionary["CM"]);
                i++
            }
            else {
                tempArr.push(dataDictionary["C"]);
            }
        }
        else if (s[i] === "V") {
            tempArr.push(dataDictionary["V"]);
        }
        else if (s[i] === "M") {
            tempArr.push(dataDictionary["M"]);
        }
        else if (s[i] === "D") {
            tempArr.push(dataDictionary["D"]);
        }
        else if (s[i] === "L") {
            tempArr.push(dataDictionary["L"]);
        }
    }

    for(let j = 0; j< tempArr.length; j++){
        convertedInteger = convertedInteger + tempArr[j]
    }
    return convertedInteger
};