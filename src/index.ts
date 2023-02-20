function makeTuple<T, Y>(x: T, y: Y): [T, Y] {
  return [x, y];
}

function makeArr<T>(...x: T[]): T[] {
  return x;
}

const arr = makeArr("t", "t", "t");
const arr2 = makeArr(1, 2, 3, 4);
console.log(arr);
console.log(arr2);

const tuple1 = makeTuple("3", 2);
const tuple2 = makeTuple(true, {});
console.log(tuple1);
console.log(tuple2);
// tuple1[2] = 22; // won't work