import ListItem from "./ListItem";

interface IList {
  list: ListItem[],
  load(): void,
  save(): void,
  clearList(): void,
  addItem(item: ListItem): void,
  removeItem(id: string): void
}

export default class List implements IList {
  static listItemsNode = document.querySelector("#listItems") as HTMLUListElement;
  constructor(
    private _list: ListItem[]
  ) {}

  get list() {
    return this._list
  }
  set list(val: ListItem[]) {
    this._list = val
  }
  
  load() {
    const listItemsNode = document.querySelector("#listItems") as HTMLUListElement;
    listItemsNode.innerHTML = "test";
  }

  save(): void {
    
  }

  clearList(): void {
    
  }

  addItem(item: ListItem): void {
    
  }

  removeItem(id: string): void {
    
  }
}