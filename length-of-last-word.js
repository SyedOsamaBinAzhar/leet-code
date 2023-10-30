var lengthOfLastWord = function(s) {
    let endIndex = 0
    let startIndex = 0

    for(let i = s.length - 1; i>=0; i--){
        if(s[i] !== " "){
             endIndex = i;
            break
        }
    }

    for(let j = endIndex; j>=0; j--){
        if(s[j] === " "){
             startIndex = j+1;
            break
        }
    }

    return (endIndex-startIndex) + 1
};

// lengthOfLastWord("Hello World")
// lengthOfLastWord("luffy is still joyboy")
