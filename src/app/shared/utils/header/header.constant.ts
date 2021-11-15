import { PolicyGroup } from '@shared/models/policy-group.model';
export const cachePolicies: PolicyGroup[] = [
  
  {
    name: 'mapping',
    DisplayName: 'Politicas de ubicacion',
    policies: [
      {
        name: 'direct',
        DisplayName: 'Directa',
        description: '',
        type: 'mapping',
        icon: 'reorder',
      },
      {
        name: 'associative',
        DisplayName: 'Asociativa',
        description: '',
        type: 'mapping',
        icon: 'segment',
      },
      {
        name: 'set-associative',
        DisplayName: 'Asociativa por conjuntos',
        description: '',
        type: 'mapping',
        icon: 'list_alt',
      },
    ],
  },
  {
    name: 'fetching',
    DisplayName: 'Politicas de extraccion',
    policies: [
      {
        name: 'request',
        DisplayName: 'Por demanda',
        description: '',
        type: 'fetching',
        icon: '',
      },
      {
        name: 'prefetch',
        DisplayName: 'Con anticipacion',
        description: '',
        type: 'fetching',
        icon: '',
      },
      {
        name: 'selective',
        DisplayName: 'Selectiva',
        description: '',
        type: 'fetching',
        icon: '',
      },
    ],
  },
  {
    name: 'replacement',
    DisplayName: 'Politicas de remplazo',
    policies: [
      {
        name: 'random',
        DisplayName: 'Aleatorio',
        description: '',
        type: 'replacement',
        icon: '',
      },
      {
        name: 'lru',
        DisplayName: 'Least Recently Used',
        description: '',
        type: 'replacement',
        icon: '',
      },
      {
        name: 'fifo',
        DisplayName: 'First In First Out',
        description: '',
        type: 'replacement',
        icon: '',
      },
    ],
  },
  {
    name: 'writing',
    DisplayName: 'Politicas de escritura',
    policies: [
      {
        name: 'write-through',
        DisplayName: 'Inmediata',
        description: '',
        type: 'writing',
        icon: '',
      },
      {
        name: 'write-back',
        DisplayName: 'Aplazada',
        description: '',
        type: 'writing',
        icon: '',
      },
      {
        name: 'write-with-alocate',
        DisplayName: 'Con ubicacion',
        description: '',
        type: 'writing',
        icon: '',
      },
      {
        name: 'write-with-no-alocate',
        DisplayName: 'Sin ubicacion',
        description: '',
        type: 'writing',
        icon: '',
      },
    ],
  },
];
