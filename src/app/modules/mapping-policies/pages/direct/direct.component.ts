import {
  Component,
  ViewChild,
  AfterViewInit,
  ElementRef,
  ChangeDetectorRef,
} from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { MatAutocomplete } from '@angular/material/autocomplete';
import { MatOption } from '@angular/material/core';
import {
  ByteUnit,
  ByteUnits,
  UnitsDict,
} from '@modules/mapping-policies/utils/types/byte-unit.type';
import { MathFn } from '@shared/lib/math.functions';
import { Position } from '@shared/types/position.type';
import { BaseComponent } from '@shared/utils/base.component';
import { BehaviorSubject } from 'rxjs';
import { AnimeService } from 'src/app/animations/anime.service';
declare var anime: any;

@Component({
  selector: 'acs-direct',
  templateUrl: './direct.component.html',
  styleUrls: ['./direct.component.css'],
})
export class DirectComponent extends BaseComponent implements AfterViewInit {
  // handles configs for display elements
  @ViewChild('memory') memoryDBlock: ElementRef | undefined;
  @ViewChild('cache') cacheDBlock: ElementRef | undefined;
  memoryDInitialPosition?: Position;

  // handles data from config panel
  MemoryAddrSize?: ByteUnit;
  CacheSize?: ByteUnit;
  WordSize?: ByteUnit;

  // handles form
  formGroup: FormGroup;
  // handles suggestions shown in autocomplete
  bitSuggestionSet: Set<number> = new Set([]);
  // Byte units suggestions shown in autocomplete
  ByteUnitsDict: Readonly<ByteUnits>[];
  // asks for bits instead of bytes in forms:
  bitsMode = new BehaviorSubject<boolean>(false);

  constructor(
    private readonly animeService: AnimeService,
    private readonly formBuilder: FormBuilder
  ) {
    super();
    // set form items
    this.ByteUnitsDict = [...UnitsDict];
    for (let i = 1; i <= 5; i++) {
      this.bitSuggestionSet.add(Math.pow(2, i));
    }
    this.bitSuggestionSet.add(10);
    this.bitSuggestionSet.add(20);
    this.bitSuggestionSet.add(30);

    // set the form itself
    this.formGroup = this.formBuilder.group({
      memSize: [null, [Validators.required]], // BitsValidator(this.bitSuggestionSet)]],
      memTypeSize: [null, [Validators.required]], // BitsValidator(this.bitSuggestionSet)]],
      cacheSize: [null, [Validators.required]], // BitsValidator(this.bitSuggestionSet)]],
      wordSize: [8, [Validators.required]],
    });

    // do conversion of the blocksize
    const addr = Math.pow(2, 8);
    this.WordSize = {
      value: addr,
      readable: MathFn.getLowestIntegerByte(addr),
      unit: MathFn.getByteMultiple(addr),
    };
  }

  ngAfterViewInit(): void {}

  onSubmit($event: any): void {
    $event.preventDefault();
    $event.stopPropagation();
    console.log(this.MemorySize.value);

    // this.animate();
    this.animeService.move('#memory', 100, 0);
    this.animeService.move('#cache', -200, 0);
  }

  setMemoryAddrSize(element: HTMLInputElement | MatOption): void {
    const value = +element.value;
    if (this.bitsMode.getValue()) {
      // CASE OF RECEIVING BITS
      this.bitSuggestionSet.add(value);
      const addr = Math.pow(2, value);

      this.MemoryAddrSize = {
        value: addr,
        readable: MathFn.getLowestIntegerByte(addr),
        unit: MathFn.getByteMultiple(addr),
        bits: value,
      };
    } else {
      if (
        !this.MemoryTypeSize.pristine &&
        this.MemoryTypeSize.value &&
        this.MemoryTypeSize.value !== ''
      ) {
        let bits = 0;
        const units = this.MemoryTypeSize.value;
        let multiplier = UnitsDict.findIndex((val: ByteUnits) => units === val);
        multiplier = multiplier === -1 ? 0 : multiplier;
        const totalUnits = value * Math.pow(1024, multiplier);
        bits = Math.log2(totalUnits);
        // CASE OF RECEIVING MAX ADDRESSABLE
        this.MemoryAddrSize = {
          value,
          readable: MathFn.getLowestIntegerByte(value),
          unit: MathFn.getByteMultiple(value),
          bits,
        };
      }
    }
  }

  setMemoryAddrTypeSize(element: HTMLInputElement | MatOption | MatAutocomplete): void {
    const controlValue = this.MemoryTypeSize.value;
    if (
      !this.MemorySize.pristine &&
      this.MemorySize.value &&
      this.MemorySize.value !== ''
    ) {
      let bits = 0;
      const units = controlValue;
      let multiplier = UnitsDict.findIndex((val: ByteUnits) => units === val);
      multiplier = multiplier === -1 ? 0 : multiplier;
      const totalUnits = this.MemorySize.value * Math.pow(1024, multiplier);
      bits = Math.log2(totalUnits);
      // CASE OF RECEIVING MAX ADDRESSABLE
      this.MemoryAddrSize = {
        value: this.MemorySize.value,
        readable: MathFn.getLowestIntegerByte(this.MemorySize.value),
        unit: MathFn.getByteMultiple(this.MemorySize.value),
        bits,
      };
    }
  }

  setCacheAddrSize(elementRef: HTMLInputElement | MatOption): void {
    const addr = Math.pow(2, +elementRef.value);
    this.CacheSize = {
      value: addr,
      readable: MathFn.getLowestIntegerByte(addr),
      unit: MathFn.getByteMultiple(addr),
    };
  }

  setWordSize(elementRef: HTMLInputElement | MatOption): void {
    const addr = Math.pow(2, +elementRef.value);
    this.WordSize = {
      value: addr,
      readable: MathFn.getLowestIntegerByte(addr),
      unit: MathFn.getByteMultiple(addr),
    };
  }

  toggleBitMode(): void {
    if (this.bitsMode.getValue()) {
      this.bitsMode.next(false);
    } else {
      this.bitsMode.next(true);
    }
  }

  get MemoryBlock(): HTMLElement {
    return (
      (this.memoryDBlock?.nativeElement as HTMLElement) || new HTMLElement()
    );
  }

  get CacheBlock(): HTMLElement {
    return (
      (this.cacheDBlock?.nativeElement as HTMLElement) || new HTMLElement()
    );
  }

  get MemorySize(): AbstractControl {
    return (this.formGroup.get('memSize') as FormControl) || new FormControl();
  }
  get MemoryTypeSize(): AbstractControl {
    return (
      (this.formGroup.get('memTypeSize') as FormControl) || new FormControl()
    );
  }
}
