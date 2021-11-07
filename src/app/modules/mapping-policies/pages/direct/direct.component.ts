import {
  Component,
  ViewChild,
  Input,
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
import { ByteUnit } from '@modules/mapping-policies/utils/types/byte-unit.type';
import { MathFn } from '@shared/lib/math.functions';
import { Position } from '@shared/types/position.type';
import { BaseComponent } from '@shared/utils/base.component';
import { AnimeService } from 'src/app/animations/anime.service';
import { BitsValidator } from './../../utils/validators/bits.validator';
declare var anime: any;

@Component({
  selector: 'acs-direct',
  templateUrl: './direct.component.html',
  styleUrls: ['./direct.component.css'],
})
export class DirectComponent extends BaseComponent implements AfterViewInit {
  @ViewChild('memory') memoryBlock: ElementRef | undefined;
  @ViewChild('cache') cacheBlock: ElementRef | undefined;
  MemoryAddr?: ByteUnit;
  CacheSize?: ByteUnit;
  memoryInitialPosition?: Position;
  formGroup: FormGroup;
  bitsArray: number[] = [];
  maxAddr: ByteUnit[] = [];
  maxCacheAddr: ByteUnit[] = [];

  constructor(
    private readonly animeService: AnimeService,
    private readonly formBuilder: FormBuilder
  ) {
    super();
    for (let i = 1; i <= 5; i++) {
      this.bitsArray.push(Math.pow(2, i));
    }
    this.bitsArray.push(10);
    this.bitsArray.push(20);
    this.bitsArray.push(30);
    this.setMaxAddrArray();
    console.log(this.maxAddr);

    
    this.formGroup = this.formBuilder.group({
      memSize: [null, [Validators.required, ]],//BitsValidator(this.bitsArray)]],
      cacheSize: [null, [Validators.required, ]],//BitsValidator(this.bitsArray)]],
    });
  }

  ngAfterViewInit(): void {
    this.memoryInitialPosition = {
      left: `${this.MemoryBlock.offsetWidth + 100}px`,
    };
  }

  setMaxAddrArray() {
    let addr;
    this.bitsArray.forEach((num, index) => {
      addr = Math.pow(2, num);      
      this.maxAddr[index] = {
        value: addr,
        readable: MathFn.getLowestIntegerByte(addr),
        unit: MathFn.getByteMultiple(addr),
      };  
      this.maxCacheAddr[index] = {
        value: addr,
        readable: MathFn.getLowestIntegerByte(addr),
        unit: MathFn.getByteMultiple(addr),
      };
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

  setMemoryAddrSize(element: HTMLInputElement) {
    this.bitsArray.push(+element.value);
    this.setMaxAddrArray();
    const addr = Math.pow(2, +element.value);

    this.MemoryAddr = {
      value: addr,
      readable: MathFn.getLowestIntegerByte(addr),
      unit: MathFn.getByteMultiple(addr), 
    }
  }

  setCacheAddrSize(elementRef: HTMLInputElement) {
    const addr = Math.pow(2, +elementRef.value);
    this.CacheSize = {
      value: addr,
      readable: MathFn.getLowestIntegerByte(addr),
      unit: MathFn.getByteMultiple(addr), 
    }
  }

  setWordSize(elementRef: HTMLInputElement) {}

  get MemoryBlock(): HTMLElement {
    return (
      (this.memoryBlock?.nativeElement as HTMLElement) || new HTMLElement()
    );
  }

  get CacheBlock(): HTMLElement {
    return (this.cacheBlock?.nativeElement as HTMLElement) || new HTMLElement();
  }

  get MemorySize() {
    return (this.formGroup.get('memSize') as FormControl) || new FormControl();
  }
}
