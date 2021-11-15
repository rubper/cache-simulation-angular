import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'acs-prefetch',
  templateUrl: './prefetch.component.html',
  styleUrls: ['./prefetch.component.css']
})
export class PrefetchComponent implements OnInit {
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
    for(let i = 0; i < (this.CacheMemoryLength / 2); i++) {
      const data = this.generateData();
      const nextIndex = this.MainMemory.indexOf(data);
      this.CacheMemory.push(data);
      this.CacheMemory.push(this.MainMemory[nextIndex]);
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
      if(this.substitutionInput.value === 'LRU') {
        if(this.lruCounter[this.CacheMemory.indexOf(requestedData)]) {
          this.lruCounter[this.CacheMemory.indexOf(requestedData)]++;
          this.lruCounter[this.CacheMemory.indexOf(requestedData)+1]++;
        } else {
          this.lruCounter[this.CacheMemory.indexOf(requestedData)] = 1;
          this.lruCounter[this.CacheMemory.indexOf(requestedData)+1] = 1;
        }
      }
      return requestedData;
    } else {
      console.log('cache miss');
      this.log.nativeElement.insertAdjacentHTML('beforeend',`<div class="m-1 bg-red-300">Cache miss.</div>`);
      const result = this.handleCacheMiss(valueRequested);
      const resultIndex = this.MainMemory.indexOf(result);
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
        this.CacheMemory[maxCountIndex+1] = this.MainMemory[resultIndex+1];
        this.fifoCounter[maxCountIndex] = 0;
        this.fifoCounter[maxCountIndex+1] = 0;
      } else if(this.substitutionInput.value === 'LRU') {
        let minLruCounter = 1;
        let minElement = this.CacheMemory[0];
        this.CacheMemory.forEach((element:string, index: number) => {
          if(!this.lruCounter[index]) {
            this.lruCounter[index] = 0;
          }
          if (this.lruCounter[index] < minLruCounter) {
            minLruCounter = this.lruCounter[index];
            minElement = element;
          }
        });
        const minCountIndex = this.CacheMemory.indexOf(minElement);
        this.CacheMemory[minCountIndex] = result;
        this.CacheMemory[minCountIndex+1] = this.MainMemory[resultIndex+1];

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
