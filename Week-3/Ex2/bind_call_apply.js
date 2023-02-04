// This is regarding difference in using bind(), call() and apply() methods of javascript.
// All these methods binds a object to other method.

function sum(a,b){
    return this.num1+this.num2 + a + b;
}


// bind() method
// This method has 'this' object as first parameter and other parameters as comma seperated values and it returns a function that can be called.
let retFunc = sum.bind({num1:10,num2:20},40,10);
console.log(retFunc());     // returns 80

retFunc = sum.bind({num1:10,num2:20},10);
console.log(retFunc(20));   // returns 60

retFunc = sum.bind({num1:10,num2:20});
console.log(retFunc(20,20));   // returns 70

//________________________________________________________________________________________



// call() method
// Same as bind but this method will not return a new function but calls the same function with the passed object.
console.log(sum.call({num1:10,num2:30},10,20));     // returns 70

// ____________________________________________________________________________________________





// .apply() method takes this and a single array object instead of multiple parameters.
// Same as call but takes array as second argument instead of comma seperated arguments.

console.log(sum.apply({num1:10,num2:30},[100,30]));     // return 170

