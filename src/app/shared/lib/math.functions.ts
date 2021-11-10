import { UnitsDict, ByteUnits } from '@modules/mapping-policies/utils/types/byte-unit.type';

export class MathFn {
  static isOdd(x: number) {
    return x % 2 === 0 ? false : true;
  }
  static isEven(x: number) {
    return !MathFn.isOdd(x);
  }
  static getLowestIntegerByte(x: number) {
    let aux = x;
    while (aux % 1024 === 0) {
      aux = aux / 1024;
    }
    return aux;
  }

  static getByteMultiple(x: number): ByteUnits {
    let aux = x;
    let counter = 0;
    while(aux % 1024 === 0) {
      counter++;
      aux = aux / 1024;
    }
    if (counter <= 8) {

      return UnitsDict[counter] as ByteUnits;
    }
    return 'B';
  }

  static toHex(x: number | string, base?: number): number {
    return +(parseInt(x.toString(), base).toString(16));
  }

  static toBinary(x: number | string, base?: number): number {
    return +(parseInt(x.toString(), base).toString(2));
  }

  static toDecimal(x: number | string, base?: number): number {
    return +(parseInt(x.toString(), base).toString(10));
  }
}
