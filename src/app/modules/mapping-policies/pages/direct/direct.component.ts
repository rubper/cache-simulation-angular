import { Component, ViewChild, Input, AfterViewInit, ElementRef } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Position } from '@shared/types/position.type';
import { BaseComponent } from '@shared/utils/base.component';
import { AnimeService } from 'src/app/animations/anime.service';
import { BitsValidator } from './../../utils/validators/bits.validator';
declare var anime: any;

@Component({
  selector: 'acs-direct',
  templateUrl: './direct.component.html',
  styleUrls: ['./direct.component.css']
})
export class DirectComponent extends BaseComponent implements AfterViewInit {
  @ViewChild('memory') memoryBlock: ElementRef | undefined;
  @ViewChild('cache') cacheBlock: ElementRef | undefined;
  memoryInitialPosition?: Position;
  formGroup: FormGroup;
  bitsArray: number[] = [];

  constructor(
    private readonly animeService: AnimeService,
    private readonly formBuilder: FormBuilder
  ) {
    super();
    for (let i = 1; i <= 5; i++) {
      this.bitsArray.push(Math.pow(2, i));      
    }
    this.formGroup = this.formBuilder.group({
      'memSize': [null, [Validators.required, BitsValidator(this.bitsArray)]],
    })
  }

  ngAfterViewInit(): void {
    this.memoryInitialPosition = {
      left: `${this.MemoryBlock.offsetWidth + 100}px`,
    }
  }

  onSubmit($event: any) {
    $event.preventDefault(); $event.stopPropagation();
    console.log(this.MemorySize.value);
    
    //this.animate();
    this.animeService.move('#memory', 100, 0);
    this.animeService.move('#cache', -200, 0);
  }

  setMemoryAddrSize(elementRef: HTMLInputElement) {
  }

  setCacheAddrSize(elementRef: HTMLInputElement) {
  }

  setWordSize(elementRef: HTMLInputElement) {
  }

  get MemoryBlock(): HTMLElement {
    return this.memoryBlock?.nativeElement as HTMLElement || new HTMLElement();
  }
  
  get CacheBlock(): HTMLElement {
    return this.cacheBlock?.nativeElement as HTMLElement || new HTMLElement();
  }

  get MemorySize() {
    return this.formGroup.get('memSize') as FormControl || new FormControl();
  }
}
