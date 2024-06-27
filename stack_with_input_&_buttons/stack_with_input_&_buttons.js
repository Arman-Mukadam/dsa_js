let data = [];
let currentSize = data.length;
let maxValue = 5;


// const element = document.getElementById('element').value;
function push() {
    let newvalue = document.getElementById('element').value;
    if (currentSize >= maxValue) {
        console.log('stack is full');
    }
    else {
        data[currentSize] = newvalue;
        currentSize++;
        document.getElementById('element').value = '';
    }
};

function pop() {
    if (currentSize > 0) {
        currentSize--;
        data.length = currentSize;
    } else {
        alert('stack is empty');
    }
}

function displayAllElements() {
    if (data.length > 0) {
        for (let i = 0; i <= currentSize - 1; i++) {
            // console.log(data[i]);
            console.log(data);

        }
    } else {
        alert('404 No Data Found');
    }
}