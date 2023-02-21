interface Tab<T> {
  id: string,
  position: number,
  data: T
}

type NumberTab = Tab<number>;
type stringTab = Tab<string>;
type booleanTab = Tab<boolean>;
type objectTab = Tab<object>;
type numberArrTab = Tab<Array<number>>;
type stringArrTab = Tab<Array<string>>;
type booleanArrTab = Tab<Array<boolean>>;