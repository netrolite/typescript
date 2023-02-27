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
    let listItemsHTML = "";
    this.list.forEach(listItem => {
      listItemsHTML += `
        <li class="item">
          <input type="checkbox" ${listItem.checked ? "checked" : ""} id="${listItem.id}">
          <label for="2">${listItem.description}</label>
          <button class="button">X</button>
        </li>
      `
    })
    listItemsNode.innerHTML = listItemsHTML;
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