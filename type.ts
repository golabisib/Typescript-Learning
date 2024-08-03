function add(n1: number, n2: number, showResult: boolean, phrase: string) {
    const result = n1 + n2;
    return showResult ? phrase + result : n1*n2;
}

const num1: number = 5;
const num2: number = 7.1;
const printResult: boolean = true;
const resultPhrase: string = "Result is:"
const result = add(num1, num2, printResult, resultPhrase);
console.log(result)
