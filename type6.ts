function addTwo(n1: number, n2: number){
    return n1 + n2;
}

function printResultTwo(num: number){
    console.log("Result: "+ num);
}

printResultTwo(addTwo(5,10))

let combineValues : (num1: number, num2: number) => number;
combineValues = addTwo;

console.log(combineValues(2,2))
