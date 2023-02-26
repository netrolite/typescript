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


// Awaited - helps with return type of a Promise
interface User {
  id: number,
  name: string,
  username: string,
  email: string
}

async function fetchUsers(): Promise<User[]> {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  // All async fns implicitly return a promise. And if the fn explicitly returns any promises inside of it, they're automatically wrapped inside the outer promise. In this case, the Promise returned by response.json() is automatically wrapped inside the Promise implicitly returned by fetchUsers(). Therefore, when you await the Promise returned by fetchUsers() in the try-catch block, it will wait for both fetch() and response.json() to complete before resolving the Promise and returning the parsed JSON data. However, it is still recommended to await the json() method to avoid any unexpected behavior that may occur due to unhandled Promise rejections.
  // return response.json();
  return await response.json();
}

async function fetchData() {
  // setTimeout is async, so the function just skips it and returns undefined
  // setTimeout(() => {
  //   return "some data";
  // }, 100)

  // the proper approach is to explicitly return a promise that resolves after 100ms (even though setTimeout is async)
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("some data");
    }, 100)
  })
}

(async () => {
  const response = fetchData();
  console.log(response);
})();

(async () => {
  try {
    const users = await fetchUsers();
    console.log(users);
  } catch (err) {
    console.error(err);
  }
})();