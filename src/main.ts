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
  
  try {
    const list = List.getInstance();
    list.load();
  } catch (err) {
    showErr((err as Error).message);
  }
  
function showErr(errMsg: string) {
  const errAlertNode = document.querySelector(".err-alert") as HTMLDivElement;
  const errAlertMsgNode = document.querySelector(".err-msg") as HTMLParagraphElement;

  errAlertMsgNode.innerHTML = `<b>Error:</b> ${errMsg}`; 

  if (!errAlertNode.classList.contains("active")) {
    errAlertNode.classList.add("active");
    setTimeout(() => {
      errAlertNode.classList.remove("active");
    }, 2000)
  }
}
