let x: any;
let y: unknown;

// no errrors, typescirpt not checking anything
// x.trim();

// error: Object is of type "unknown".
// y.trim();

// have to check the type before using any type-specific methods like .trim()
if (typeof y === "string") {
  console.log(y.trim());
} else if (typeof y === "number") {
  console.log(y.toFixed(2));
}