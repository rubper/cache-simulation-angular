import { Component, OnInit } from '@angular/core';
import * as anime from 'animejs';

@Component({
  selector: 'acs-associative',
  templateUrl: './associative.component.html',
  styleUrls: ['./associative.component.css']
})
export class AssociativeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  clickHandler() {
    anime({
      targets: ""
    } as anime.AnimeParams)
  }

}
