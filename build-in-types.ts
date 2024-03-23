// global objects
const a: Array<number> = [1, 2, 3]
const date = new Date()
date.getTime()

// build-in objects
Math.pow(2, 2)

// DOM and BOM
let body = document.body
let allDiv = document.querySelectorAll("div")
allDiv.forEach()

// utility types
interface IPerson {
  name: string
  age: number
}
let viking: IPerson = { name: "viking", age: 20 }
type IPartial = Partial<IPerson>
let viking2: IPartial = { name: "viking" }

type IOmit = Omit<IPerson, "name">
let viking3: IOmit = { age: 20 }

export {} // export to make this file a module
