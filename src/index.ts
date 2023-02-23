type Grade = "A" | "B" | "C" | "D" | "F";
type Students = "John" | "Joe" | "Bob" | "Rob";
type FinalGrades = Partial<Record<Students, Grade>>;

const finalGrades: FinalGrades = {
  Joe: "D"
}

// Pick<T> and Omit<T>
interface Assignment {
  title: string,
  description: string,
  studentId: number,
  maxScore: number,
  passingScore: number
}

const ass: Assignment = {
  title: "do this",
  description: "sample",
  studentId: 10,
  maxScore: 100,
  passingScore: 30
}

type MyPick<T, K extends keyof T> = {
  [P in K]: T[P]
}
type AssignmentResult = MyPick<Assignment, "title" | "passingScore">;

const assResult: AssignmentResult = {
  title: "This is the title of the assignment",
  passingScore: 25
}
