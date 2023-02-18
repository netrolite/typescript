// "never" return type
// both functions have an inferred "never" return type
// however, if I use the "function" keyword to declare them, the return type becomes "void"

const throwErr = (errMsg: string) => {
  throw new Error(errMsg);
}

const infinite = () => {
  let i: number = 1;
  while (true) {
    i++
  }
}
