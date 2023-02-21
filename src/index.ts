interface Car<T> {
  horsepower: number,
  isConvertible: boolean,
  fuelType: T
}

// fuelType: string
type CarStringFuel = Car<string>;
// fuelType: number
type CarNumberFuel = Car<number>;

const car: CarNumberFuel = {
  horsepower: 100,
  isConvertible: true,
  fuelType: 10
}

// fuelType: string
const car2: Car<string> = {
  horsepower: 300,
  isConvertible: false,
  fuelType: "diesel"
}

// fuelType: number
const car3: Car<number> = {
  horsepower: 150,
  isConvertible: true,
  fuelType: 12
}