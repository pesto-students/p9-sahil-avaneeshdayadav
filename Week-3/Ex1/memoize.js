var cache = {};

function add(a,b){
    return a+b;
}

function memoize(func){

    return (a=null,b=null,...args)=>{

       if(a==null){
        return b;
       }
       if(b==null)
        return a;

       if(a+","+b in cache || b+","+a in cache){
        return cache[a+','+b];
       }
       else{
        console.log("calculating for a, b = "+a+", "+b);
        cache[a+','+b] = a + b;
        cache[b+','+a] = a + b;
        return cache[a+','+b];
       }
    }
}

const memoizeAdd = memoize(add);
console.log(memoizeAdd(199,2,4));
console.log(cache);
console.log(memoizeAdd(4));
console.log(cache);
console.log(memoizeAdd(199,2,4));
console.log(cache);
console.log(memoizeAdd(129,2,4));
console.log(cache);
