import { ComplexCalculator } from "./complexCalculator.service";
import { Calculator, ComplexNumber } from "./interface/complex.interface";
import { Logger } from "./logger";

export class Multiply extends ComplexCalculator implements Calculator {
  constructor(logger: Logger) {
    super(logger);
  }
  calculator(a: ComplexNumber, b: ComplexNumber): ComplexNumber {
    const result: ComplexNumber = {
      real: a.real * b.real - a.imaginary * b.imaginary,
      imaginary: a.real * b.imaginary + a.imaginary * b.real,
    };

    this.logger.log(
      `Multiply: (${a.real}, ${a.imaginary}) * (${b.real}, ${b.imaginary}) = (${result.real}, ${result.imaginary})`
    );

    return result;
  }
}
