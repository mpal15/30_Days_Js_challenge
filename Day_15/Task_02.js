// Create a closure that maintains a private counter.implement functions to increment and get the current value of the counter.

function Counter(){
      let count = 0;
      return {
        increment: function(){
            count++;
            console.log(`counter incremented. current value ${count}`);
        },
        getValue: function(){
            return count;
        }
      }
}

const mycounter = Counter();
mycounter.increment();
mycounter.increment();
console.log(` Current counter value: ${mycounter.getValue()}`);