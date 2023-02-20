type IncomeStreams = "salary" | "business" | "bonus" | "robbery";
type NumOrStr = number | string;
type Income = Record<IncomeStreams, NumOrStr>;

const income: Income = {
  robbery: 100,
  salary: 200,
  business: 600,
  bonus: "negative fifty"
}