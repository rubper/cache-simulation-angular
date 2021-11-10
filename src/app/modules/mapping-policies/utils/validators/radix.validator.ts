import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';
import { binRegex, decRegex, hexRegex } from '@shared/regexes/radix.regex';
import { Radix, RadixDict } from '../types/radix.type';

export class RadixValidator {
  static isHex(num: string): boolean {
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

  static validInput(radixControl: AbstractControl): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      if (control.pristine) {
        return null;
      }
      const incoming = radixControl.value as Radix;
      let output;
      switch (incoming) {
        case RadixDict.bin:
          output = RadixValidator.isBin(control.value) ? null : { notRadix: true };
          break;
        case RadixDict.dec:
          output = RadixValidator.isDec(control.value) ? null : { notRadix: true };
          break;
        case RadixDict.hex:
          output = RadixValidator.isHex(control.value) ? null : { notRadix: true };
          break;
        default:
          output = RadixValidator.isDec(control.value) ? null : { notRadix: true };
          break;
      }
      return output;
    };
  }
}
