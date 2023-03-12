console.log("Problem 6.4 : Best time to buy and sell stock");
console.log("Time complexity O(n) and space complexity O(1)");

const prices = [7,6,4,3,1];
console.log(prices);

let leastPrice = Number.MAX_VALUE;
let currProfit = 0;
let maxProfit = 0;

for(let i = 0;i < prices.length; i++){
    if(prices[i] < leastPrice) {
        leastPrice = prices[i];
    }
    currProfit = prices[i] - leastPrice;
    if(currProfit > maxProfit ) {
        maxProfit = currProfit;
    }
}

console.log(maxProfit);
