function addTwo(n1, n2) {
    return n1 + n2;
}
function printResultTwo(num) {
    console.log("Result: " + num);
}
printResultTwo(addTwo(5, 10));
var combineValues;
combineValues = addTwo;
console.log(combineValues(2, 2));
