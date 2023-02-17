enum JobStatusEnum {
  Pending = 1,
  Rejected,
  Interview,
  Accepted
}

interface Company {
  name: string,
  location: string,
  employeesAmount: number,
  phoneNumber?: string,
  website?: string
}

type JobStatus = "pending" | "rejected" | "interview" | "accepted";

interface Job {
  position: string,
  company: Company,
  status: JobStatus | JobStatusEnum
}

const google: Company = {
  name: "Google",
  location: "Silicon Valley",
  employeesAmount: 100
}

const engineer: Job = {
  position: "back-end developer",
  status: "pending",
  company: google
}

const designer: Job = {
  position: "lead designer",
  status: JobStatusEnum.Rejected,
  company: google
}

console.log(JobStatusEnum);
console.log(engineer);
console.log(designer);
