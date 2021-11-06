import { Component, OnInit, ViewChild, Input } from '@angular/core';
declare var anime: any;

@Component({
  selector: 'acs-direct',
  templateUrl: './direct.component.html',
  styleUrls: ['./direct.component.css']
})
export class DirectComponent implements OnInit {
  @ViewChild('memoryAddrSize') memoryAddrSize: Input | undefined;
  @ViewChild('cacheSize') cacheSize: Input | undefined;
  movementToggle: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  sendHandler($event: any) {
    this.movementToggle = this.movementToggle ? false : true;
    this.animate();
  }

  setMemoryAddrSize(event: any) {
    console.log(event);
  }

  setCacheAddrSize(event: any) {
    console.log(event);
  }

  animate() {
    anime.timeline()
    .add({
      targets: '#obj1',
      translateX: this.movementToggle? 250 : 0,
    } as anime.AnimeParams)
  }

}
