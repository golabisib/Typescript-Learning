type numing = number | string;

function combine(input1: numing, input2: numing) {
    let result : number | string ;
    if (typeof input1 === "number" && typeof input2 === "number"){
        result = input1 + input2;
    } else {
        result = input1.toString() + input2.toString();
    }
    return result;
}

console.log(combine(2, 3))
console.log(combine("golabi", 3))
console.log(combine("golabi", "sib"))
