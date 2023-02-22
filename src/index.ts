function makeArr<X, Y = any>(x: X, y: Y): [X, Y] {
  return [x, y];
}

// second type argument is optional. Defaults to any as per function definition
const v = makeArr<string>("d", 4);