import {
  Component,
  ViewChild,
  AfterViewInit,
  ElementRef,
} from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { MatOption } from '@angular/material/core';
import { ByteUnit, ByteUnits, UnitsDict } from '@modules/mapping-policies/utils/types/byte-unit.type';
import { MathFn } from '@shared/lib/math.functions';
import { Position } from '@shared/types/position.type';
import { BaseComponent } from '@shared/utils/base.component';
import { AnimeService } from 'src/app/animations/anime.service';
declare var anime: any;

@Component({
  selector: 'acs-direct',
  templateUrl: './direct.component.html',
  styleUrls: ['./direct.component.css'],
})
export class DirectComponent extends BaseComponent implements AfterViewInit {
  //handles configs for display elements
  @ViewChild('memory') memoryDBlock: ElementRef | undefined;
  @ViewChild('cache') cacheDBlock: ElementRef | undefined;
  memoryDInitialPosition?: Position;

  //handles data from config panel
  MemoryAddrSize?: ByteUnit;
  CacheSize?: ByteUnit;
  WordSize?: ByteUnit;

  //handles form
  formGroup: FormGroup;
  //handles suggestions shown in autocomplete
  bitSuggestionSet: Set<number> = new Set([]);
  //Byte units suggestions shown in autocomplete
  ByteUnitsDict: Readonly<ByteUnits>[];
  
  constructor(
    private readonly animeService: AnimeService,
    private readonly formBuilder: FormBuilder
  ) {
    super();
    this.ByteUnitsDict = [...UnitsDict];
    for (let i = 1; i <= 5; i++) {
      this.bitSuggestionSet.add(Math.pow(2, i));
    }
    this.bitSuggestionSet.add(10);
    this.bitSuggestionSet.add(20);
    this.bitSuggestionSet.add(30);
    this.setMaxAddrArray();
    
    this.formGroup = this.formBuilder.group({
      memSize: [null, [Validators.required, ]],//BitsValidator(this.bitSuggestionSet)]],
      cacheSize: [null, [Validators.required, ]],//BitsValidator(this.bitSuggestionSet)]],
      wordSize: [8, [Validators.required, ]],
    });
    const addr = Math.pow(2, 8);
    this.WordSize = {
      value: addr,
      readable: MathFn.getLowestIntegerByte(addr),
      unit: MathFn.getByteMultiple(addr), 
    }
  }

  ngAfterViewInit(): void {
    this.memoryDInitialPosition = {
      left: `${this.MemoryBlock.offsetWidth + 100}px`,
    };
  }

  setMaxAddrArray() {
    let addr;
    this.bitSuggestionSet.forEach((num, index) => {
      addr = Math.pow(2, num);      
    });
  }

  onSubmit($event: any) {
    $event.preventDefault();
    $event.stopPropagation();
    console.log(this.MemorySize.value);

    //this.animate();
    this.animeService.move('#memory', 100, 0);
    this.animeService.move('#cache', -200, 0);
  }

  setMemoryAddrSize(element: HTMLInputElement | MatOption) {
    const value = +element.value;
    //CASE OF RECEIVING BITS
    // this.bitSuggestionSet.add(+element.value);
    // const addr = Math.pow(2, +element.value);

    // this.MemoryAddrSize = {
    //   value: addr,
    //   readable: MathFn.getLowestIntegerByte(addr),
    //   unit: MathFn.getByteMultiple(addr), 
    // }
  }

  setMemoryAddrTypeSize(element: HTMLInputElement | MatOption) {
    const value = element.value as ByteUnits;

  }

  setCacheAddrSize(elementRef: HTMLInputElement | MatOption) {
    const addr = Math.pow(2, +elementRef.value);
    this.CacheSize = {
      value: addr,
      readable: MathFn.getLowestIntegerByte(addr),
      unit: MathFn.getByteMultiple(addr), 
    }
  }

  setWordSize(elementRef: HTMLInputElement | MatOption) {
    const addr = Math.pow(2, +elementRef.value);
    this.WordSize = {
      value: addr,
      readable: MathFn.getLowestIntegerByte(addr),
      unit: MathFn.getByteMultiple(addr), 
    }
  }

  get MemoryBlock(): HTMLElement {
    return (
      (this.memoryDBlock?.nativeElement as HTMLElement) || new HTMLElement()
    );
  }

  get CacheBlock(): HTMLElement {
    return (this.cacheDBlock?.nativeElement as HTMLElement) || new HTMLElement();
  }

  get MemorySize() {
    return (this.formGroup.get('memSize') as FormControl) || new FormControl();
  }
}
