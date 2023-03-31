// more detailed
// https://codefrontend.com/promises/#:~:text=const%20promise%20%3D%20new%20Promise((,for%20creating%20a%20JavaScript%20promise.


console.log("Welcome to custom promise implementation");

class myPromise
{
  
    constructor(executor)
    {   
        this.isResolved= false;
        this.resultData;
        this.thenFunction;
        
        const resolve = (value) => {
               this.isResolved=true;
               this.resultData=value;
               if(typeof this.thenFunction === 'function' )
               {
                this.thenFunction(this.resultData);
               }
        };
        
        
        const reject =(value) => {
                 this.isResolved=true;
                 this.resultData=value;
                 if(typeof this.thenFunction === 'function' )
                    {
                        this.thenFunction(this.resultData);
                    }
            
        };
        
        
        executor(resolve,reject);
    }
    
    then(fn)
    {
        this.thenFunction=fn;
        if(this.isResolved)
        {
            this.thenFunction(this.resultData);
        }
        return this;
    }
    
    catch(fn)
    {
        this.thenFunction=fn;
        if(this.isResolved)
        {
            this.thenFunction(this.resultData);
        }
        return this;   
    }
    
    
}

const test2=new myPromise( (resolve,reject) =>{
    setTimeout(  () => {
       if((getNumber() % 5) === 0)
       { 
          reject("Reject called :- Number is divisible by 5");
       }
       else
       {
          resolve("Resolved called :- Number is not divisible by 5");
       }
    },1000);
    }).then( (data) => { console.log(data);})
      .catch((data) => { console.log(data);});

function getNumber()
{
    randomNumber = Math.floor(Math.random()*1000);
    console.log("Random number is "  + randomNumber );
    return randomNumber;
    
}

