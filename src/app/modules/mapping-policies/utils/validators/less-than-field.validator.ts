import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export function LessThanFieldValidator(fieldControl: AbstractControl): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    if (control.pristine) {
      return null;
    }
    const incoming = fieldControl.value;
    return control.value > incoming
      ? { greaterThan: { value: true, message: `El valor actual no debe ser mayor.` } }
      : null;
  };
}
