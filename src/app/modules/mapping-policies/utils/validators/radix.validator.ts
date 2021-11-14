import { AbstractControl, FormControl, ValidationErrors } from '@angular/forms';
import {
  binRegex,
  decRegex,
  hexRegex,
  notBinRegex,
  notDecRegex,
  notHexRegex,
} from '@shared/regexes/radix.regex';
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

  static isNotHex(num: string): boolean {
    return notHexRegex.test(num);
  }

  static isNotDec(num: string): boolean {
    return notDecRegex.test(num);
  }

  static isNotBin(num: string): boolean {
    return notBinRegex.test(num);
  }
  static isRadix(num: string): boolean {
    return RadixValidator.isHex(num) ||
      RadixValidator.isDec(num) ||
      RadixValidator.isBin(num)
      ? true
      : false;
  }

  static validInput(control: AbstractControl): ValidationErrors | null {
    const parentForm = control.parent;
    const incoming = parentForm?.get('radix')?.value as Radix;
    let output = null;
    switch (incoming) {
      case RadixDict.bin:
        if (RadixValidator.isNotBin(control.value))
          output = { notBinary: true } as ValidationErrors;
        break;
      case RadixDict.dec:
        if (RadixValidator.isNotDec(control.value))
          output = { notDecimal: true } as ValidationErrors;
        break;
      case RadixDict.hex:
        if (RadixValidator.isNotHex(control.value))
          output = { notHexadecimal: true } as ValidationErrors;
        break;
      default:
        output = { notValidRadixType: true } as ValidationErrors;
        break;
    }
    return output;
  }

  static uniformGroups(control: FormControl): ValidationErrors | null {
    const value: string = control.value;
    let response = null;
    if (!control.pristine) {
      const bytes = value.split(' ');
      bytes.forEach(
        (byte: string, index: number) => {
          if(bytes[index + 1] && byte.length !== bytes[index + 1].length) {
            response = {bytesArentUniform: true};
          }
        }
      )
    }
    return response;
  }
}
