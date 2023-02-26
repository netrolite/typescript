export interface Item {
  id: string,
  description: string,
  checked: boolean
}

export default class ListItem {
  constructor(
    private _id: string,
    private _description: string,
    private _checked: boolean
  ) {}

  get id() {
    return this._id
  }
  set id(val: string) {
    this._id = val
  }
  
  get description() {
    return this._description
  }
  set description(val: string) {
    this._description = val
  }
  
  get checked() {
    return this._checked
  }
  set checked(val: boolean) {
    this._checked = val
  }
  
}