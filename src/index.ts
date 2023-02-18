// rest parameters
function total(a: number, nums: number[], b: number) {
  console.log(a);
  console.log(b);
  return nums.reduce((acc, curr) => acc + curr, 0);
}

console.log(total(1, [5, 4, 4], 3))