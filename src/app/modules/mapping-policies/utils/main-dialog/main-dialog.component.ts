import { Component, Inject } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

import { BIN, DEC, HEX, Radix } from '../types/radix.type';
import { RadixValidator } from '../validators/radix.validator';
import { MathFn } from '@shared/lib/math.functions';

import { StepperSelectionEvent } from '@angular/cdk/stepper';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'acs-main-dialog',
  templateUrl: './main-dialog.component.html',
  styleUrls: ['./main-dialog.component.css'],
})
export class MainDialogComponent {
  firstStepForm: FormGroup;
  addressBits = 0;
  addressBinary: bigint = BigInt(0);

  radixes: Radix[] = [BIN, DEC, HEX];

  constructor(
    private readonly formBuilder: FormBuilder,
    private dialogRef: MatDialogRef<MainDialogComponent>,
    @Inject(MAT_DIALOG_DATA)
    data: { memory: string; cache: string; blocksize: string }
  ) {
    this.firstStepForm = this.formBuilder.group({
      radix: [DEC, [Validators.required]],
      memAddress: [null, [Validators.required, RadixValidator.validInput(this.RadixField)]],
    });
  }

  submitForm($event: StepperSelectionEvent): void {
    // if (this.firstStepForm.invalid) {
    //   $event.preventDefault();
    //   $event.stopPropagation();
    // }
    switch (this.RadixField.value) {
      case DEC:
        this.addressBinary = BigInt(this.AddressField.value.toString(2));
        break;
      case HEX:
        this.addressBinary = BigInt(MathFn.toDecimal(this.AddressField.value, 16).toString(2));
        break;
      case BIN:
        this.addressBinary = BigInt(MathFn.toDecimal(this.AddressField.value, 2).toString(2));
        break;
      default:
        break;
    }
    this.addressBits = this.addressBinary.toString().length;
  }

  get AddressField(): AbstractControl {
    return (
      (this.firstStepForm.get('memAddress') as FormControl) || new FormControl()
    );
  }

  get RadixField(): AbstractControl {
    return (
      (this.firstStepForm.get('radix') as FormControl) || new FormControl()
    );
  }
}
