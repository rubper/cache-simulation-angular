import { Component, OnInit } from '@angular/core';
import { PolicyType } from '@shared/types/policy-type.type';
import { NavLink } from './utils/types/nav-link.type';

@Component({
  selector: 'acs-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {
  links: NavLink[] = [
    {
      name: 'mapping' as PolicyType,
      title: 'Ubicación',
      subLinks: [
        {
          name: 'direct',
          title: 'Directa',
        },
        {
          name: 'associative',
          title: 'Asociativa',
        },
        {
          name: 'set-associative',
          title: 'Asociativa por conjuntos',
        },
      ]
    },
    {
      name: 'fetching' as PolicyType,
      title: 'Extraccion',
      subLinks: [
        {
          name: 'request',
          title: 'Demanda',
        },
        {
          name: 'prefetch',
          title: 'Anticipacion',
        },
        {
          name: 'selective',
          title: 'Selectiva',
        },
      ]
    },
    {
      name: 'replacement' as PolicyType,
      title: 'Remplazo',
      subLinks: [
        {
          name: 'random',
          title: 'Aleatorio',
        },
        {
          name: 'lru',
          title: 'Least Recently Used',
        },
        {
          name: 'fifo',
          title: 'First In First Out',
        },
      ]
    },
    {
      name: 'writing' as PolicyType,
      title: 'Escritura',
      subLinks: [
        {
          name: 'write-through',
          title: 'Inmediata',
        },
        {
          name: 'write-back',
          title: 'Aplazada',
        },
        {
          name: 'write-with-alocate',
          title: 'Con Ubicacion',
        },
        {
          name: 'write-with-no-alocate',
          title: 'Sin Ubicacion',
        },
      ]
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
