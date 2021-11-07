import { Component, ViewChild, Input, AfterViewInit, ElementRef } from '@angular/core';
import { Position } from '@shared/types/position.type';
import { BaseComponent } from '@shared/utils/base.component';
import { AnimeService } from 'src/app/animations/anime.service';
declare var anime: any;

@Component({
  selector: 'acs-direct',
  templateUrl: './direct.component.html',
  styleUrls: ['./direct.component.css']
})
export class DirectComponent extends BaseComponent implements AfterViewInit {
  @ViewChild('memory') memoryBlock: ElementRef | undefined;
  @ViewChild('cache') cacheBlock: ElementRef | undefined;
  @ViewChild('memoryAddrSize') memoryAddrSize: Input | undefined;
  @ViewChild('cacheSize') cacheSize: Input | undefined;
  memoryInitialPosition?: Position;
  movementToggle: boolean = false;
  bitsArray: number[] = [];

  constructor(
    private readonly animeService: AnimeService
  ) {
    super();
    for (let i = 1; i <= 5; i++) {
      this.bitsArray.push(Math.pow(2, i));      
    }
  }

  ngAfterViewInit(): void {
    this.memoryInitialPosition = {
      left: `${this.MemoryBlock.offsetWidth + 100}px`,
    }
  }

  onSubmit($event: any) {
    $event.preventDefault(); $event.stopPropagation();
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

  animate() {
    anime.timeline()
    .add({
      targets: '#memory',
      translateX: this.movementToggle? '100px' : 0,
    } as anime.AnimeParams)
  }

  get MemoryBlock(): HTMLElement {
    return this.memoryBlock?.nativeElement as HTMLElement || new HTMLElement();
  }
  
  get CacheBlock(): HTMLElement {
    return this.cacheBlock?.nativeElement as HTMLElement || new HTMLElement();
  }
}
