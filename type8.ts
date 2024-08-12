type CarYear = number
type CarType = string
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

console.log(car)
