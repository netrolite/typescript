function makeArr<T>(x: T) {
  return [x];
}

function makeTuple<T>(x: T): [T] {
  return [x];
}

const v1 = makeArr(2);