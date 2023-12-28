/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let l = 0 // left is buy
    let r = 1 // right is sell
    let maxP = 0

    while(r < prices.length){
        if(prices[l] < prices[r]){
            let profit = prices[r] - prices[l]
            maxP = Math.max(maxP, profit)
        }else{
            l = r
        }
        r += 1
    }

    return maxP
};