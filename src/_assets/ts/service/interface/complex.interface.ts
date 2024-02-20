export interface ComplexNumber {
  real: number;
  imaginary: number;
}

export interface Calculator {
  calculator(a: ComplexNumber, b: ComplexNumber): ComplexNumber;
}
