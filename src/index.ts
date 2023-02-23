type Grade = "A" | "B" | "C" | "D" | "F";
type Students = "John" | "Joe" | "Bob" | "Rob";
type FinalGrades = Record<Students, Grade>;

const arr: number[] = [];
const finalGrades: Partial<FinalGrades> = {
  Rob: "B"  
}

