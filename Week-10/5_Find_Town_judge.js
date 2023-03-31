function inDegOutDeg(n, trust){
    var temp = Array.from({length:n+1},()=>0);

    for(let i=0;i<trust.length;i++){
        temp[trust[i][0]] -= 1;
        temp[trust[i][1]] += 1;
    }

    for(let i=1;i<temp.length;i++){
        if(temp[i] == n-1)
            return i;
    }
    
    return -1;
}

console.log(inDegOutDeg(3,[[1,3],[2,3]]));
console.log(inDegOutDeg(3,[[[1,3],[2,3],[3,1]]]));
