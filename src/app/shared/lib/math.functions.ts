export class MathFn {
  static isOdd(x: number) {
    return x % 2 === 0 ? false : true;
  }
  static isEven(x: number) {
    return !MathFn.isOdd(x);
  }
}
