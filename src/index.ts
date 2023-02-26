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
  return await response.json();
}

// Awaited<typeof fetchUsers>; would return Promise<Users[]> because typeof fetchUsers gives you the entire function including its arguments like `(id: number) => Promise<Student>`. And Awaited<T> converts this to just the return type, which is `Promise<Student>`. To avoid that, you should use Awaited<ReturnType<typeof test>> to make sure that you're passing only the return type of `test` (which is Promise<Student>) to Awaited<T>, which would give you type `Student`.
type UsersAwaited = Awaited<ReturnType<typeof fetchUsers>>;

// every object should be typed as an interface and everything else should be a type!
(async () => {
  const usersPromise = fetchUsers(); // Promise<User[]>
  const usersAwaited = await fetchUsers(); // User[]
  const usersAwaitedWithType: UsersAwaited = await fetchUsers(); // User[]
})();
