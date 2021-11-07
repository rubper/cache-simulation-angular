import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { BaseComponent } from '@shared/utils/base.component';
declare var anime: any;

@Component({
  selector: 'acs-direct',
  templateUrl: './direct.component.html',
  styleUrls: ['./direct.component.css']
})
export class DirectComponent extends BaseComponent implements OnInit {
  @ViewChild('memoryAddrSize') memoryAddrSize: Input | undefined;
  @ViewChild('cacheSize') cacheSize: Input | undefined;
  movementToggle: boolean = false;

  constructor() {
    super();
  }

  ngOnInit(): void {
  }

  onSubmit($event: any) {
    $event.preventDefault(); $event.stopPropagation();
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
      translateX: this.movementToggle? '75%' : 0,
    } as anime.AnimeParams)
  }

}
