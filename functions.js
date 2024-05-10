function add() {
    console.log("function called");
    return 1+2;
}

function add(a, b) {
    return a+b;
}


// save returned value
sum = add();
console.log(sum);

// same as above
console.log(add());

console.log(add(4,5));