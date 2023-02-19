// infers that the type is HTMLImageElement but adding an exclamation mark to denote that I know what I'm doing so it's definitely not null
const selectedByTagName = document.querySelector("img")!;
// infers the type as "Element" (not even "HTMLElement") so adding type assertion to make the compiler think it's type of HTMLImageElement and is not null
const selectedById = document.querySelector("#img") as HTMLImageElement;