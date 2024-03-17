type IOperator = "plus" | "minus" | "multiply" | "divide"
// type ICalculator = (operator: IOperator, numbers: number[]) => number
interface ICalculator {
  (operator: IOperator, numbers: number[]): number
  plus: (numbers: number[]) => number
  minus: (numbers: number[]) => number
}
declare const calculator: ICalculator

export default calculator
