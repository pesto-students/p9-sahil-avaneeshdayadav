// Sort array of zero, one and two.

console.log("Problem 3: Sort array of 0,1,2");
console.log("Time complexity O(n) and space complexity 0(1)");
function sort012(arr){
    let n = arr.length;
    let low = 0, mid = 0, high = n-1;
    
    while(mid <= high){
        if(arr[mid] == 2){
            [arr[mid], arr[high]] = [arr[high], arr[mid]];
            high--;
        }
        else if(arr[mid] == 0){
            [arr[mid], arr[low]] = [arr[low], arr[mid]];
            low++;
            mid++;
        }
        else
            mid++;
    }
}

let arr = [2, 0, 1, 2, 1, 2, 1, 0];
sort012(arr);
console.log(arr);
