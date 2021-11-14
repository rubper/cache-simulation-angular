import { ValidatorFn, ValidationErrors, AbstractControl } from '@angular/forms';
import {
  Radix,
  RadixDict,
} from '@modules/mapping-policies/utils/types/radix.type';
import { MathFn } from '@shared/lib/math.functions';
export function lessThanSize(data: {
  memory: string;
  cache: string;
  blocksize: string;
}): ValidatorFn {
    
    return (control: AbstractControl): ValidationErrors | null => {
      console.log(data);
    const radix = control.parent?.get('radix')?.value as Radix;
    let response = null;
    if (!control.pristine) {
      const valueFieldArray = control.value.split(' ');
      let auxString = '';
      if (valueFieldArray.length > 1) {
        valueFieldArray.forEach((value: string) => {
          auxString += value.trim();
        });
      } else {
        auxString = valueFieldArray[0];
      }
      let currentLength = 0;
      switch (radix) {
        case RadixDict.bin:
          currentLength = BigInt(
            MathFn.toDecimal(auxString, 2).toString(2)
          ).toString().length;
          response =
            currentLength <= Number(data.memory) ? null : { greaterThan: true };
          break;
        case RadixDict.dec:
          currentLength = BigInt(Number(auxString).toString(2)).toString()
            .length;
          response =
            currentLength <= Number(data.memory) ? null : { greaterThan: true };
          break;
        case RadixDict.hex:
          currentLength = BigInt(
            MathFn.toDecimal(auxString, 16).toString(2)
          ).toString().length;
          response =
            currentLength <= Number(data.memory) ? null : { greaterThan: true };
          break;

        default:
          break;
      }
      console.log(`Current length: ${currentLength}. Memory length: ${data.memory.length}`);
    }

    return response;
  };
}
