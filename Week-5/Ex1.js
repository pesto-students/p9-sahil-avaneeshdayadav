//A function which adds numbers from 0 to 10 and returns value.
function toGetResult()
{
 let result=0;
 
 for (let i =0; i < 10; i++)
 {
    result = result + i;
 }

let promise = new Promise(function (resolve, reject) {
    setTimeout(function () {
        if(result)
        {
            resolve(result);
        }
        else
        {
            reject("error");
        }
    }, 4000); 
});

 return promise;
}

//Async function with awaits to get result
async function sumOfRange() {
  
  const y = await toGetResult();
  
  return new Promise(function(resolve,reject){
      if(y > 0)
      {
            resolve(y);   
      }
      else
      {
         reject("Number is less then zero");
      }
  });
  
}

//Prints summation 
sumOfRange().then(function(result){console.log("Sumation from 0 to 10 is  " + result);}).catch(function(result){console.log(result);});



//Generators 
function* sumOfNumber()
{
  let i =0,result=0;
  while(i<10)
  {
    result = result+ i;
    i++;
  }
  yield result;
}

//Calls generators.
const test = sumOfNumber();
console.log("Generators : Sumation from 0 to 10 is  " + test.next().value);








