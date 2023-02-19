const yearNode = document.querySelector("#year") as HTMLTimeElement;
const year = new Date().getFullYear().toString();

yearNode.setAttribute("datetime", year);
yearNode.textContent = year;