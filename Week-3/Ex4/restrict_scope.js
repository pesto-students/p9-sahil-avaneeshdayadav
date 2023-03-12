function createStack() {
    // This will make items visible only in this function scope.
    const items = [];
    return {
        push(item) { 
            items.push(item);
        },
        pop() {
            return items.pop();
        }
    };
}

stack.push(10);
stack.push(5);
stack.pop(); // => 5
stack.items; // => undefined
