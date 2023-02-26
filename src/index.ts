function createCar(horsepower: number, isConvertible: boolean, make: string) {
  return { horsepower, isConvertible, make } 
}

type Car = ReturnType<typeof createCar>;
type CarParams = Parameters<typeof createCar>;

const args: CarParams = [120, false, "GM"];
// const badArgs = [120, false, "GM"] // won't work. Only tuples can be used with the spread operator
const car: Car = createCar(...args); // spread operator

function sum(...nums: number[]) { // rest operator
  return nums.reduce((acc, curr) => acc + curr, 0);
}

console.log(sum(1,2,3,4,5,6));