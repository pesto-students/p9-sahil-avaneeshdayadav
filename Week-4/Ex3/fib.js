const fib = (n) =>({
    [Symbol.iterator]:()=>{
     let i =1;
     let old=0, new1=0;
     return {
         next:()=> {
           
              if(i++ < n)
              {
                if(i == 2)
                {
                 return {value:0, done:false};
                }
              
            
                if(i == 3)
                {
                  old = 0;
                  new1 = 1;
                  return {value:1, done:false};
                }
                
                if(i>3)
                {
                  [old,new1]=[new1,(old+new1)];
                  return { value:new1, done:false };
                }
                  
              }
             else
             {
                return {done:true};   
             }
             
         }
         
     }
     
    }
});

console.log("Fibonaci series:-");
for (let i of fib(8))
{
    console.log(i);
}
