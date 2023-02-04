function createIncrement(){

    let count = 0;
    function increment(){
        count++;
    }

    let message = 'Count is '+count;
    function log(){
        console.log(message);
    }

    return [increment, log];
}

const [increment, log] = createIncrement();
increment();
increment();
increment();
log();


/*

Output is 0;
->This is because message variable is set to message with count 0 initially and is not changed after that.
->Calling log() at last will print the message that was initialized earlier.
->To print updated value of the message we can initialize that message inside the log function.
->This will update the message with updated value of the count whenever log() function is called.
 
*/
