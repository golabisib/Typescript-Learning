function add(n1, n2, showResult, phrase) {
    var result = n1 + n2;
    return showResult ? phrase + result : n1 * n2;
}
var num1 = 5;
var num2 = 7.1;
var printResult = true;
var resultPhrase = "Result is:";
var result = add(num1, num2, printResult, resultPhrase);
console.log(result);
