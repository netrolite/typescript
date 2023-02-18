// custom type guard
function isArray(val: any): boolean {
  return Array.isArray(val);
}

function checkToSeeIfValIsArray(val: any): string {
  // using a custom type guard
  if (isArray(val)) return "yes, it is indeed an array";
  return "no, it is not an array";
}

console.log(checkToSeeIfValIsArray(3));
