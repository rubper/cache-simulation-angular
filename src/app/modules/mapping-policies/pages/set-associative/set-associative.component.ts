// angular core + reactive libs
import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  Validators,
  AbstractControl,
  FormControl,
} from '@angular/forms';
import { BehaviorSubject } from 'rxjs';

// material libs
import { MatOption } from '@angular/material/core';
import { MatDialogRef, MatDialog } from '@angular/material/dialog';

// components
import { SetAssociativeDialogComponent } from '@modules/mapping-policies/utils/set-associative-dialog/set-associative-dialog.component';
import { BaseComponent } from '@shared/utils/base.component';

// validator
import { lessThanMemoryField } from '@modules/mapping-policies/utils/validators/less-than-field.validator';

// types
import {
  ByteUnit,
  ByteUnits,
  UnitsDict,
} from '@modules/mapping-policies/utils/types/byte-unit.type';
import { Radix } from '@modules/mapping-policies/utils/types/radix.type';
import { Position } from '@shared/types/position.type';

// libs
import { MathFn } from '@shared/lib/math.functions';

// anime lib
import { AnimeService } from '@animations/anime.service';
import { ConfigData } from '@modules/mapping-policies/utils/types/config-data.type';

// constants
const STARTING_WORD_SIZE = 3;

@Component({
  selector: 'acs-set-associative',
  templateUrl: './set-associative.component.html',
  styleUrls: ['./set-associative.component.css'],
})
export class SetAssociativeComponent
  extends BaseComponent
  implements OnInit, AfterViewInit
{
  // handles configs for display elements
  @ViewChild('memory') memoryDBlock: ElementRef | undefined;
  @ViewChild('cache') cacheDBlock: ElementRef | undefined;
  memoryDInitialPosition?: Position;

  // handles data from config panel
  MemoryAddrSize?: ByteUnit;
  CacheSetsData?: ByteUnit;
  CacheWaysData?: ByteUnit;
  WordSize?: ByteUnit;

  // handles form
  formGroup: FormGroup;
  // handles suggestions shown in autocomplete
  bitSuggestionSet: Set<number> = new Set([]);
  // Byte units suggestions shown in autocomplete
  ByteUnitsDict: Readonly<ByteUnits>[];
  // asks for bits instead of bytes in forms:
  bitsMode = new BehaviorSubject<boolean>(false);
  // dialog reference
  mainRef?: MatDialogRef<any>;

  constructor(
    private readonly animeService: AnimeService,
    private readonly formBuilder: FormBuilder,
    private readonly matDialog: MatDialog
  ) {
    super();
    // set form items
    this.ByteUnitsDict = [...UnitsDict];
    for (let i = 1; i <= 3; i++) {
      this.bitSuggestionSet.add(Math.pow(2, i));
    }

    // set the form itself
    this.formGroup = this.formBuilder.group({
      memSize: [null, [Validators.required]], // BitsValidator(this.bitSuggestionSet)]],
      memTypeSize: ['B' as Radix], // BitsValidator(this.bitSuggestionSet)]],
      cacheSets: [8, [Validators.required, lessThanMemoryField]], // BitsValidator(this.bitSuggestionSet)]],
      cacheWays: [2, [Validators.required]], // BitsValidator(this.bitSuggestionSet)]],
      wordSize: [STARTING_WORD_SIZE, [Validators.required]],
      bitsMode: [false],
    });

    // do conversion of the blocksize
    const addr = Math.pow(2, STARTING_WORD_SIZE);
    this.WordSize = {
      value: addr,
      readable: MathFn.getLowestIntegerByte(addr),
      unit: MathFn.getByteMultiple(addr),
    };
  }

  ngOnInit(): void {
    this.MemorySizeType.valueChanges.subscribe((change) => {
      this.CacheSets.updateValueAndValidity();
      this.CacheWays.updateValueAndValidity();
    });
    this.setCacheSets();
    this.setCacheWays();
  }

  ngAfterViewInit(): void {}

  onSubmit($event: any): void {
    $event.preventDefault();
    $event.stopPropagation();
    // the animation to execute on submit
    this.animeService.rotate('.square', 2000); // moves #cache to x:-200, y:0, from its ORIGINAL position
  }

  setMemoryAddrSize(): void {
    this.MemoryAddrSize = this.handleConversionOnChange(
      this.MemorySize,
      this.MemorySizeType
    );
  }

  setCacheSets(): void {
    const mainValue = this.CacheSets.value;
    // CASE OF RECEIVING BITS
    this.bitSuggestionSet.add(mainValue);
    const maxAddr = Math.pow(2, mainValue);

    this.CacheSetsData = {
      value: maxAddr,
      readable: MathFn.getLowestIntegerByte(maxAddr),
      unit: MathFn.getByteMultiple(maxAddr),
      bits: Math.ceil(mainValue),
    };
  }

  setCacheWays(): void {
    const mainValue = this.CacheSets.value;
    // CASE OF RECEIVING BITS
    this.bitSuggestionSet.add(mainValue);
    const maxAddr = Math.pow(2, mainValue);

    this.CacheWaysData = {
      value: maxAddr,
      readable: MathFn.getLowestIntegerByte(maxAddr),
      unit: MathFn.getByteMultiple(maxAddr),
      bits: Math.ceil(mainValue),
    };
  }

  handleConversionOnChange(
    mainControl: AbstractControl,
    unitControl?: AbstractControl
  ): ByteUnit {
    const mainValue = mainControl.value;
    let controlVar: ByteUnit = {
      value: 0,
    };
    if (this.bitsMode.getValue()) {
      // CASE OF RECEIVING BITS
      this.bitSuggestionSet.add(mainValue);
      const maxAddr = Math.pow(2, mainValue);

      controlVar = {
        value: maxAddr,
        readable: MathFn.getLowestIntegerByte(maxAddr),
        unit: MathFn.getByteMultiple(maxAddr),
        bits: Math.ceil(mainValue),
      };
    } else if (unitControl) {
      // CASE OF RECEIVING MAX ADDRESSABLE
      if (
        !unitControl.pristine &&
        unitControl.value &&
        unitControl.value !== ''
      ) {
        let bits = 0;
        const multiplier = UnitsDict.findIndex(
          (byteUnits: ByteUnits) => unitControl.value === byteUnits
        );
        if (multiplier !== -1) {
          const totalUnits = mainValue * Math.pow(1024, multiplier);
          bits = Math.log2(totalUnits);
          controlVar = {
            value: mainValue,
            readable: MathFn.getLowestIntegerByte(mainValue),
            unit: unitControl.value,
            bits: Math.ceil(bits),
          };
        }
      }
    }
    return controlVar;
  }

  setWordSize(elementRef: HTMLInputElement | MatOption): void {
    const addr = Math.pow(2, +elementRef.value);
    this.WordSize = {
      value: addr,
      readable: MathFn.getLowestIntegerByte(addr),
      unit: MathFn.getByteMultiple(addr),
      bits: elementRef.value,
    };
  }

  toggleBitMode(): void {
    if (this.bitsMode.getValue()) {
      this.bitsMode.next(false);
    } else {
      this.bitsMode.next(true);
    }
    this.setMemoryAddrSize();
  }

  clickHandler() {
    if(this.CacheSetsData && this.CacheWaysData && this.MemoryAddrSize) {
      this.mainRef = this.matDialog.open(SetAssociativeDialogComponent, {
        data: {
          memory: this.MemoryAddrSize.bits?.toString(),
          cache: {
            sets: this.CacheSetsData,
            ways: this.CacheWaysData,
          },
          blocksize: this.BlockSize.value,
          _type: 's',
        } as ConfigData,
      });
    }
  }

  // gets Main Memory square's instance
  get MemoryBlock(): HTMLElement {
    return (
      (this.memoryDBlock?.nativeElement as HTMLElement) || new HTMLElement()
    );
  }
  // gets Cache square's instance
  get CacheBlock(): HTMLElement {
    return (
      (this.cacheDBlock?.nativeElement as HTMLElement) || new HTMLElement()
    );
  }
  // gets Main Memory form's controls
  get MemorySize(): AbstractControl {
    return (this.formGroup.get('memSize') as FormControl) || new FormControl();
  }
  get MemorySizeType(): AbstractControl {
    return (
      (this.formGroup.get('memTypeSize') as FormControl) || new FormControl()
    );
  }
  // gets Cache form's controls
  get CacheSets(): AbstractControl {
    return (
      (this.formGroup.get('cacheSets') as FormControl) || new FormControl()
    );
  }
  // gets Cache ways form's controls
  get CacheWays(): AbstractControl {
    return (
      (this.formGroup.get('cacheWays') as FormControl) || new FormControl()
    );
  }
  // gets Cache form's controls
  get BlockSize(): AbstractControl {
    return (this.formGroup.get('wordSize') as FormControl) || new FormControl();
  }
}
