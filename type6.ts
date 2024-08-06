function addTwo(n1: number, n2: number){
    return n1 + n2;
}

function printResultTwo(num: number){
    console.log("Result: "+ num);
}

printResultTwo(addTwo(5,10))
console.log(printResultTwo(addTwo(5,10)))
