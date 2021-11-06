import { PolicyGroup } from '@shared/models/policy-group.model';
export const cachePolicies: PolicyGroup[] = [
  {
    name: 'fetching',
    policies: [
      {
        name: 'prefetch',
        description: '',
        type: 'fetching',
        icon: '',
      },
      {
        name: 'request',
        description: '',
        type: 'fetching',
        icon: '',
      },
      {
        name: 'selective',
        description: '',
        type: 'fetching',
        icon: '',
      }
    ]
  },
  {
    name: 'mapping',
    policies: [
      {
        name: 'direct',
        description: '',
        type: 'mapping',
        icon: '',
      },
      {
        name: 'associative',
        description: '',
        type: 'mapping',
        icon: '',
      },
      {
        name: 'set-associative',
        description: '',
        type: 'mapping',
        icon: '',
      },
    ]
  },
  {
    name: 'replacement',
    policies: [
      {
        name: 'random',
        description: '',
        type: 'replacement',
        icon: '',
      },
      {
        name: 'lru',
        description: '',
        type: 'replacement',
        icon: '',
      },
      {
        name: 'fifo',
        description: '',
        type: 'replacement',
        icon: '',
      }
    ]
  },
  {
    name: 'writing',
    policies: [
      {
        name: 'write through',
        description: '',
        type: 'writing',
        icon: '',
      },
      {
        name: 'write back',
        description: '',
        type: 'writing',
        icon: '',
      },
      {
        name: 'write with alocate',
        description: '',
        type: 'writing',
        icon: '',
      },
      {
        name: 'write with no alocate',
        description: '',
        type: 'writing',
        icon: '',
      },
    ]
  },
]
