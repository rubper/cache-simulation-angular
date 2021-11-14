import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';
import { Radix, RadixArray } from '../types/radix.type';
import { ByteUnits, UnitsDict } from './../types/byte-unit.type';

export function lessThanMemoryField(
  control: AbstractControl
): ValidationErrors | null {
  if (control.pristine) {
    return null;
  }
  const memoryControl = control.parent?.get('memSize');
  const bitsModeControl = control.parent?.get('bitsMode');
  let memMultiplier = 1;
  let cacheMultiplier = 1;
  if (!bitsModeControl?.value) {
    const memType = control.parent?.get('memTypeSize');
    memMultiplier = Math.pow(
      1024,
      UnitsDict.indexOf(memType?.value as ByteUnits)
    );
    const cacheType = control.parent?.get('cacheTypeSize');
    cacheMultiplier = Math.pow(
      1024,
      UnitsDict.indexOf(cacheType?.value as ByteUnits)
    );
  }
  console.log(`Cache value: ${control.value}. CacheMultiplier: ${cacheMultiplier}. Memory value: ${memoryControl?.value}. MemoryMultiplier: ${memMultiplier}`);
  
  return (control.value * cacheMultiplier + Math.pow(2, +control.parent?.get('wordSize')?.value)) > memoryControl?.value * memMultiplier
    ? {
        greaterThan: {
          value: true,
          message: `El valor actual no debe ser mayor.`,
        },
      }
    : null;
}
