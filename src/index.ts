function createCar(horsepower: number, isConvertible: boolean, make: string) {
  return { horsepower, isConvertible, make } 
}

type Car = ReturnType<typeof createCar>;
type CarParams = Parameters<typeof createCar>;