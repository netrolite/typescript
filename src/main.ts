import "./css/style.css";
import List from "./model/List";
import ListItem from "./model/ListItem";

const listItems: ListItem[] = []
for (let i = 0; i < 10; i++) {
  const listItem = new ListItem(
    `${i}`, "hello", Math.random() > 0.5 ? true : false
  );
  listItems.push(listItem);
}

const list = List.getInstance();
console.log(list);

list.load();