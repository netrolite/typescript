function log(val: unknown) {
  if (typeof val === "number") {
    console.log(val.toFixed(2));
  } else if (typeof val === "string") {
    if (isUpperCase(val)) console.log(val.toLowerCase());
    else console.log(val.toUpperCase())
  } else {
    console.log(val);
  }
}

function isUpperCase(s: string) {
  return s === s.toUpperCase();
}

log("HELLO");