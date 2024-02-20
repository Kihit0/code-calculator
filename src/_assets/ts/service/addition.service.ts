import { ComplexCalculator } from "./complexCalculator.service";
import { Calculator, ComplexNumber } from "./interface/complex.interface";
import { Logger } from "./logger";

export class Addition extends ComplexCalculator implements Calculator {
  constructor(logger: Logger) {
    super(logger);
  }

  calculator(a: ComplexNumber, b: ComplexNumber): ComplexNumber {
    const result: ComplexNumber = {
      real: a.real + b.real,
      imaginary: a.imaginary + b.imaginary,
    };

    this.logger.log(
      `Add: (${a.real}, ${a.imaginary}) + (${b.real}, ${b.imaginary}) = (${result.real}, ${result.imaginary})`
    );

    return result;
  }
}
