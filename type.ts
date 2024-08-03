function add(n1: number, n2: number, showResult: boolean, phrase: string) {
    const result = n1 + n2;
    return showResult ? phrase + result : n1*n2;
}

const num1 = 5;
const num2 = 7.1;
const printResult = true;
const resultPhrase = "Result is:"
const result = add(num1, num2, printResult, resultPhrase);
console.log(result)
