import { Component, ViewChild, Input, AfterViewInit, ElementRef } from '@angular/core';
import { BaseComponent } from '@shared/utils/base.component';
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
  movementToggle: boolean = false;

  constructor() {
    super();
  }

  ngAfterViewInit(): void {
    this.CacheBlock.style.left = `${this.MemoryBlock.offsetWidth + 100}px`;
  }

  onSubmit($event: any) {
    $event.preventDefault(); $event.stopPropagation();
    this.movementToggle = this.movementToggle ? false : true;
    this.animate();
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

  scaleX(target: string, value: number) {
    anime.timeline()
    .add({
      targets: target,
      scaleX: value,
    } as anime.AnimeParams)
  }

  
  scaleY(target: string, value: number) {
    anime.timeline()
    .add({
      targets: target,
      scaleY: value,
    } as anime.AnimeParams)
  }

  
  scale(target: string, x: number, y: number) {
    anime.timeline()
    .add({
      targets: target,
      scaleX: x,
      scaleY: y,
    } as anime.AnimeParams)
  }

  get MemoryBlock(): HTMLElement {
    return this.memoryBlock?.nativeElement as HTMLElement || new HTMLElement();
  }
  
  get CacheBlock(): HTMLElement {
    return this.cacheBlock?.nativeElement as HTMLElement || new HTMLElement();
  }
}
