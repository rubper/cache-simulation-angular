import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'acs-request',
  templateUrl: './request.component.html',
  styleUrls: ['./request.component.css'],
})
export class RequestComponent implements OnInit {
  @ViewChild('log') log!: ElementRef;
  MainMemoryBits: number = 32;
  CacheMemoryBits: number = 22;
  MainMemory: string[] = [];
  CacheMemory: string[] = [];
  fifoCounter: number[] = [];
  lruCounter: number[] = [];
  lruOptions: string[] = [
    'random',
    'LRU',
    'FIFO',
  ]
  CacheMemoryLength = this.MainMemoryBits - this.CacheMemoryBits;
  dataInput = new FormControl('', Validators.required);
  substitutionInput = new FormControl('', Validators.required);

  constructor() {
    for (let i = 0; i < this.MainMemoryBits; i++) {
      this.MainMemory.push(this.generateRandomHex(32));
    }
    for(let i = 0; i < this.CacheMemoryLength; i++) {
      this.CacheMemory.push(this.generateData());
    }
    console.log(this.CacheMemory);
    
  }

  ngOnInit(): void {}

  generateRandomHex(lon: number): string {
    const decimal_number = Math.pow(2,lon) * Math.random();
    return Math.floor(decimal_number).toString(2);
  }

  requestData(valueRequested: string): string {
    console.log(this.log);
    
    const requestedData = this.CacheMemory.find(
      (value: string) => value === valueRequested
    );
    if (requestedData) {
      console.log('cache hit');
      this.log.nativeElement.insertAdjacentHTML('beforeend',`<div class="m-1 bg-red-200">Cache hit.</div>`);
      return requestedData;
    } else {
      console.log('cache miss');
      this.log.nativeElement.insertAdjacentHTML('beforeend',`<div class="m-1 bg-red-300">Cache miss.</div>`);
      const result = this.handleCacheMiss(valueRequested);
      if (this.substitutionInput.value === 'random') {
        const randomIndex = Math.floor(Math.random() * (this.CacheMemoryLength - 1));
        this.CacheMemory[randomIndex] = result;
      } else if (this.substitutionInput.value === 'FIFO') {
        let maxFifoCounter = 0;
        let maxElement = this.CacheMemory[0];
        this.CacheMemory.forEach((element:string, index:number) => {
          if(!this.fifoCounter[index]) {
            this.fifoCounter[index] = 0;
          }
          if (this.fifoCounter[index] > maxFifoCounter) {
            maxFifoCounter = this.fifoCounter[index];
            maxElement = element;
          }
          this.fifoCounter[index]++; 
        });
        const maxCountIndex = this.CacheMemory.indexOf(maxElement);
        this.CacheMemory[maxCountIndex] = result;
      } else if(this.substitutionInput.value === 'LRU') {
        let minLruCounter = 0;
        let minElement = this.CacheMemory[0];
        this.CacheMemory.forEach((element:string, index: number) => {
          if(!this.lruCounter[index]) {
            this.lruCounter[index] = 0;
          }
          if (this.lruCounter[index] < minLruCounter) {
            minLruCounter = this.lruCounter[index];
            minElement = element;
          }
          this.lruCounter[index]++;
        });
        const minCountIndex = this.CacheMemory.indexOf(minElement);
        this.CacheMemory[minCountIndex] = result;

      } else {
        throw new Error("Invalid substitution type");        
      }
      return result;
    }
  }

  handleCacheMiss(valueRequested: string): string {
    return this.MainMemory.find(
      (value: string) => value === valueRequested
    ) || this.MainMemory[0];
  }

  generateData(): string {
    const lastIndex = this.CacheMemoryLength - 1;
    const randomIndex = Math.floor(lastIndex * Math.random());
    return this.MainMemory[randomIndex];
  }
}
