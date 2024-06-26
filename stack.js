// stack (linear data structure datatype)(elemenets are in sequence)

// linear data structure are - queue,array,stack
// non linear datatype - graph tree

// first come last out
// last come first out

// operation only on top

// max value while defining stack (fix elements)

// operations - push , pop , is empty , peek , print

// stack aur queue oprtns are done on Array only

let data = [];
let currentSize = data.length;
let maxValue = 5;

function push(newvalue) {
    if (currentSize >= maxValue) {
        console.log('stack is full');
    }
    data[currentSize] = newvalue;
    currentSize++;
};

function pop() {
    if (currentSize > 0) {
        currentSize--;
        data.length = currentSize;
    } else {
        alert('stack is empty');
    }
}

push(4);
push(20);
push(34);
// push(15);
// push(24);
// push(24);
// push(24);
console.log(data);

pop();
pop();