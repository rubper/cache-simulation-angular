import { Component, OnInit } from '@angular/core';
import { MatOption } from '@angular/material/core';

@Component({
  selector: 'acs-text-field',
  templateUrl: './text-field.component.html',
  styleUrls: ['./text-field.component.css']
})
export class TextFieldComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  valueChange(elementRef: HTMLInputElement | MatOption) {

  }

}
