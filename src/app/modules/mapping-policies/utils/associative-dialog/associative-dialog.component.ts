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
import { matchError } from '@shared/errors/form.errors';
import { lessThanSize } from '../validators/less-than-size.validator';
import { BaseComponent } from '@shared/utils/base.component';
import { ConfigData } from '../types/config-data.type';

@Component({
  selector: 'acs-associative-dialog',
  templateUrl: './associative-dialog.component.html',
  styleUrls: ['./associative-dialog.component.css'],
})
export class AssociativeDialogComponent extends BaseComponent {
  // input data
  firstStepForm: FormGroup;
  addressBits = 0;
  addressBinary: string = BigInt(0).toString();
  memoryBlocks: number;
  tagBits: number;
  configData: ConfigData;

  // aux
  radixes: Radix[] = [BIN, DEC, HEX];
  litTag = false;
  litCache = false;
  litWord = false;
  litColor = this.theme.mainLight;

  // output variables
  tag?: string;
  word?: string;
  memBlock?: string;
  constructor(
    private readonly formBuilder: FormBuilder,
    private dialogRef: MatDialogRef<AssociativeDialogComponent>,
    @Inject(MAT_DIALOG_DATA)
    data: ConfigData
  ) {
    super();
    this.configData = data;
    this.firstStepForm = this.formBuilder.group({
      radix: [DEC, [Validators.required]],
      memAddress: [
        null,
        [
          Validators.required,
          RadixValidator.validInput,
          RadixValidator.uniformGroups,
          lessThanSize(this.configData),
        ],
      ],
    });
    this.tagBits = +data.memory - +data.blocksize;
    this.memoryBlocks = Math.pow(2, this.tagBits);
    if (this.tagBits <= 0) {
      console.error('validation error, tags cant be negative');
    }
  }

  submitForm($event: StepperSelectionEvent): void {
    // if (this.firstStepForm.invalid) {
    //   $event.preventDefault();
    //   $event.stopPropagation();
    // }
    const valueFieldArray = this.AddressField.value.toString().split(' ');
    let auxString = '';
    if (valueFieldArray.length > 1) {
      valueFieldArray.forEach((value: string) => {
        auxString += value.trim();
      });
    } else {
      auxString = valueFieldArray[0];
    }
    switch (this.RadixField.value) {
      case DEC:
        this.addressBinary = BigInt(Number(auxString).toString(2)).toString();
        break;
      case HEX:
        this.addressBinary = BigInt(
          MathFn.toDecimal(auxString, 16).toString(2)
        ).toString();
        break;
      case BIN:
        this.addressBinary = BigInt(
          MathFn.toDecimal(auxString, 2).toString(2)
        ).toString();
        break;
      default:
        break;
    }
    this.addressBits = this.addressBinary.toString().length;
    if (this.addressBits < +this.configData.memory) {
      this.addressBinary = this.addressBinary.padStart(
        +this.configData.memory,
        '0'
      );
    }

    this.tag = this.addressBinary.substring(0, this.tagBits);
    this.word = this.addressBinary.substring(
      this.tagBits,
      +this.configData.memory
    );
    this.memBlock = this.addressBinary.substring(
      0,
      this.tagBits
    );
  }

  get AddressField(): AbstractControl {
    return (
      (this.firstStepForm?.get('memAddress') as FormControl) ||
      new FormControl()
    );
  }

  get RadixField(): AbstractControl {
    return (
      (this.firstStepForm?.get('radix') as FormControl) || new FormControl()
    );
  }
}
