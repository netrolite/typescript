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
  private static instance: List;
  private constructor() {}

  static getInstance() {
    if (!List.instance) List.instance = new List();
    return List.instance;
  }



  get list(): ListItem[] {
    const val = localStorage.getItem("listItems");
    if (val) {
      const parsed = JSON.parse(val);
      if (Array.isArray(parsed)) return parsed;
    }
    return [];
  }
  
  load() {
    throw new Error("hello from load()")
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

  clearList(): void {
    localStorage.setItem("listItems", JSON.stringify([]));
  }

  addItem(item: ListItem): void {
    this.list.push(item);
  }

  removeItem(id: string): void {
    
  }
}
