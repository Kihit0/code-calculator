import { Addition } from "../service/addition.service";
import { Divide } from "../service/divide.service";
import { Calculator, ComplexNumber } from "../service/interface/complex.interface";
import { Logger } from "../service/logger";
import { Multiply } from "../service/multiply.service";
import { Subtract } from "../service/subtract.service";

export class Controller {
  private logger: Logger;
  private operation: Map<string, Calculator>;

  constructor() {
    this.operation = new Map();
    this.logger = new Logger();
    
  }

  private fill(): void{
    this.operation.set("add", new Addition(this.logger));
    this.operation.set("subtract", new Subtract(this.logger));
    this.operation.set("multiply", new Multiply(this.logger));
    this.operation.set("divide", new Divide(this.logger));
  }

  private getComplex(): ComplexNumber[]{
    const real1Input: HTMLInputElement | null = document.querySelector("#real1");
    const imaginary1Input: HTMLInputElement | null = document.querySelector("#imaginary1");
    const real2Input: HTMLInputElement | null = document.querySelector("#real2");
    const imaginary2Input: HTMLInputElement | null = document.querySelector("#imaginary2");

    const complexNumber1: ComplexNumber = {
      real: Number(real1Input?.value),
      imaginary: Number(imaginary1Input?.value)
    };

    const complexNumber2: ComplexNumber = {
      real: Number(real2Input?.value),
      imaginary: Number(imaginary2Input?.value)
    };

    return [complexNumber1, complexNumber2];
  }

  private viewResult(complex: ComplexNumber | undefined, op: string): void{
    const resultInput: HTMLInputElement | null = document.querySelector("#result");

    if(resultInput){
      resultInput.innerHTML = `<div>${(op[0].toUpperCase() + op.slice(1))}: (${complex?.real}, ${complex?.imaginary})</div>`;
    }
  }

  private init(){
    this.fill();
    
    const addButton: HTMLButtonElement | null = document.querySelector("#add");
    const subtractButton: HTMLButtonElement | null = document.querySelector("#subtract");
    const multiplyButton: HTMLButtonElement | null = document.querySelector("#multiply");
    const divideButton: HTMLButtonElement | null = document.querySelector("#divide");

    [addButton, subtractButton, multiplyButton, divideButton].forEach(item => {
      item?.addEventListener("click", (event: Event) => {
        const target = event.target as HTMLDivElement;
        const complex: ComplexNumber[] = this.getComplex();
        this.viewResult(this.operation.get(target.id)?.calculator(complex[0], complex[1]), target.id);
      })
    })
  }

  public run(){
    this.init();
  }

}