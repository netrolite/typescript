type IncomeStreams = "salary" | "bonus" | "business" | "side hustle";

// error: index signature parameter type cannot be a literal type or generic type
/*
  type Income = {
    [key: IncomeStreams]: number
  }
*/

// no errors
// creates Income type that can have IncomeStreams as keys and numbers as values
type Income = Record<IncomeStreams, number>;
