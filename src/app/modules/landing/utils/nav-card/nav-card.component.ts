import { Component, Input, OnInit } from '@angular/core';
import { NavLink } from '../types/nav-link.type';

@Component({
  selector: 'acs-nav-card',
  templateUrl: './nav-card.component.html',
  styleUrls: ['./nav-card.component.css']
})
export class NavCardComponent implements OnInit {
  @Input()
  link!: NavLink;

  constructor() { }

  ngOnInit(): void {
  }

}
