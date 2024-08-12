type CarYear = number
type CarType = string | number
type Car = {
    year: CarYear,
    type: CarType,
}

const carYear : CarYear = 2022
const carType : CarType = "toyota"

const car : Car = {
    year: carYear,
    type: carType,
}

interface Rectangle {
    height: number,
    width: number,
}

const rectangle : Rectangle = {
    height: 20,
    width: 10,
}

console.log(rectangle)
