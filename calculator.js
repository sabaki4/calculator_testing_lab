const sum = function(a, b){
    return a + b;
};

const subtract = function(a, b){
    return a - b;
};

const multiply = function (a, b){
    return a * b;
};

const divide = function (a, b){
    if (b === 0) {
        throw new Error("Cannot divide by zero!");
    }
    return a / b;
};

const modulus = function (a, b){
    return a % b;
};

const even = function (x){
    return x % 2 === 0;
};

const odd = function (x){
    return x % 2 !== 0;
};

module.exports = { 
    sum, 
    subtract, 
    multiply, 
    divide, 
    modulus, 
    even, 
    odd 
};
