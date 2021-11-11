import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';
import { binRegex, decRegex, hexRegex } from '@shared/regexes/radix.regex';
import { Radix, RadixDict } from '../types/radix.type';

export class RadixValidator {
  static isHex(num: string): boolean {
    console.log(`Regex: ${hexRegex}`);

    console.log(`num: ${num}`);
    console.log(`test result: ${hexRegex.test(num)}`);
    return hexRegex.test(num);
  }

  static isDec(num: string): boolean {
    return decRegex.test(num);
  }

  static isBin(num: string): boolean {
    return binRegex.test(num);
  }

  static isRadix(num: string): boolean {
    return RadixValidator.isHex(num) ||
      RadixValidator.isDec(num) ||
      RadixValidator.isBin(num)
      ? true
      : false;
  }

  static validInput(formControl: AbstractControl, value: Radix): boolean {
      const incoming = value as Radix;
      let output;
      switch (incoming) {
        case RadixDict.bin:
          output = RadixValidator.isBin(formControl.value);
          break;
        case RadixDict.dec:
          output = RadixValidator.isDec(formControl.value);
          break;
        case RadixDict.hex:
          output = RadixValidator.isHex(formControl.value);
          break;
        default:
          output = RadixValidator.isDec(formControl.value);
          break;
      }
      return output;
  }
}
