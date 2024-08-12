// Optional Parameters :
// the `?` operator here marks parameter `c` as optional
function add(a: number, b: number, c?: number) {
    return a + b + (c || 0);
}

// Default Parameters:
function pow(value: number, exponent: number = 10) {
    return value ** exponent;
}

//Named Parameters:
function divide({ dividend, divisor }: { dividend: number, divisor: number }) {
    return dividend / divisor;
}

// Rest Parameters:
function add2(a: number, b: number, ...rest: number[]) {
    return a + b + rest.reduce((p, c) => p + c, 0)
}

// Type Alias:
type Negate = (value: number) => number;
// in this function, the parameter `value` automatically gets assigned the type `number` from the type `Negate`
const negateFunction: Negate = (value) => value ** -1;

console.log(negateFunction(2))
