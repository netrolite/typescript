function numOrStr(val: number | string | object): string {
  if (typeof val === "number") return "number";
  if (typeof val === "string") return "string";
  return throwErr("This should not happen");
}

function throwErr(errMsg: string): never {
  throw new Error(errMsg);
}

numOrStr([]);