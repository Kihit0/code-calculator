import { ComplexCalculator } from "./complexCalculator.service";
import { Calculator, ComplexNumber } from "./interface/complex.interface";
import { Logger } from "./logger";

export class Divide extends ComplexCalculator implements Calculator {
  constructor(logger: Logger) {
    super(logger);
  }

  private isZero(number: ComplexNumber): boolean {
    return number.real === 0 && number.imaginary === 0;
  }

  public calculator(a: ComplexNumber, b: ComplexNumber): ComplexNumber {
    if (this.isZero(b)) {
      this.logger.log(`Error: Division by zero`);
      return { real: NaN, imaginary: NaN };
    }

    const conjugateB: ComplexNumber = {
      real: b.real,
      imaginary: -b.imaginary,
    };

    const denominator: number = b.real * b.real + b.imaginary * b.imaginary;

    const result: ComplexNumber = {
      real:
        (a.real * conjugateB.real + a.imaginary * conjugateB.imaginary) /
        denominator,
      imaginary:
        (a.imaginary * conjugateB.real - a.real * conjugateB.imaginary) /
        denominator,
    };

    this.logger.log(
      `Divide: (${a.real}, ${a.imaginary}) / (${b.real}, ${b.imaginary}) = (${result.real}, ${result.imaginary})`
    );

    return result;
  }
}
