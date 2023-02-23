// Record utility type

// Syntax: Record<keyType: valueType>

const hexColorMap: Record<string, string> = {
  red: "FF0000",
  green: "00FF00",
  blue: "0000FF"
}

const incomeStreams: Record<string, number> = {
  salary: 10000,
  freelance: 8000,
  "side hustle": 6000
}

const things: Record<number, unknown> = {
  0: true,
  1: "hello",
  2: ["this", "is", "my", "real", "array"],
  3: { this: "is", my: "object" }
}
