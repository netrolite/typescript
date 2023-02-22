function getDeepValue<
  Obj,
  FirstKey extends keyof Obj,
  SecondKey extends keyof Obj[FirstKey],
  ThirdKey extends keyof Obj[FirstKey][SecondKey]
>(
  obj: Obj,
  firstKey: FirstKey,
  secondKey: SecondKey,
  thirdKey: ThirdKey
) {
  console.log(obj[firstKey][secondKey][thirdKey]);
}

const obj = {
  a: {
    deepA: 12,
    deepB: "hello"
  },
  b: {
    deepC: false,
    deepD: {
      name: "John",
      amount: 30
    }
  }
}

const x = getDeepValue(obj, "b", "deepD", "amount");