const a = 1
a = 2 // This should override the assignment
console.log(a) // Should print 2

const arrowFcn = a, b => a + b;
console.log(arrowFcn(1, 2))

setTimeout(console.log('Hello'), 1500) // Should print 'hello' after 1.5 seconds

