import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export function BitsValidator(array: number[]): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    if (control.pristine) {
      return null;
    }
    const included = array.includes(Number(control.value));
    return !included
      ? { notIncluded: { value: true, message: 'Escoge de la lista' } }
      : null;
  };
}
