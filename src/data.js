export default [
  {
    id: '1',
    value: 'p1',
    label: 'Padre 1',
    checked: false,
  },
  {
    id: '2',
    value: 'p2',
    label: 'Padre 2',
    checked: false,
    children: [
      {
        id: '2.1',
        value: 'h1',
        label: 'Hijo 2.1',
        checked: false,
      },
    ]
  },
  {
    id: '3',
    value: 'p3',
    label: 'Padre 3',
    checked: false,
    children: [
      {
        id: '3.1',
        value: 'h1',
        label: 'Hijo 3.1',
        checked: false,
      },
      {
        id: '3.2',
        value: 'h2',
        label: 'Hijo 3.2',
        checked: false,
      },
      {
        id: '3.3',
        value: 'h3',
        label: 'Hijo 3.3',
        checked: false,
        children: [
          {
            id: '3.3.1',
            value: 'n1',
            label: 'Nieto 3.3.1',
            checked: false,
          },
          {
            id: '3.3.2',
            value: 'n2',
            label: 'Nieto 3.3.2',
            checked: false,
          },
        ]
        },
      ]
    }
  ]