type mathFn = (a: number, b: number) => number;

const sum: mathFn = (a, b) => {
  return a + b;
}

console.log(sum(3, 5));
