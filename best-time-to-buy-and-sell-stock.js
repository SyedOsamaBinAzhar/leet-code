//OPTIMAL SOLUTION: CAN BE SOLVED BY NESTED LOOP BUT LEET CODE GIVES TIME EXCEEDED ON LARGE ARRAY.
//THIS APPROACH IS CALLED SLIDING WINDOW:
const maxProfit = (prices) => {
    let left = 0
    let right = 1;
    let max_profit = 0;
    let profit = 0;
    while (right < prices.length) {
        if (prices[left] < prices[right]) {
            profit = prices[right] - prices[left];
            max_profit = Math.max(max_profit, profit)
        }
        else {
            left = right;
        }
        right++;

    }


    return max_profit
};


// console.log("maxProfit([7,1,5,3,6,4])",maxProfit([7,1,5,3,6,4]))

