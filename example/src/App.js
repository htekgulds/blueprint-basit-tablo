import React from 'react'
import { Tablo } from 'blueprint-basit-tablo'

const App = () => {
  const columns = [
    'Name',
    'Address',
    'Telephone',
    'Pets'
  ]

  const data = [
    {
      id: 1,
      name: 'Hasan',
      address: 'Ankara',
      telephone: '011011011',
      pets: 'abc'
    },
    {
      id: 1,
      name: 'Hasan',
      address: 'Ankara',
      telephone: '011011011',
      pets: 'abc'
    },
    {
      id: 1,
      name: 'Hasan',
      address: 'Ankara',
      telephone: '011011011',
      pets: 'abc'
    },
    {
      id: 1,
      name: 'Hasan',
      address: 'Ankara',
      telephone: '011011011',
      pets: 'abc'
    },
    {
      id: 1,
      name: 'Hasan',
      address: 'Ankara',
      telephone: '011011011',
      pets: 'abc'
    },
    {
      id: 1,
      name: 'Hasan',
      address: 'Ankara',
      telephone: '011011011',
      pets: 'abc'
    },
    {
      id: 1,
      name: 'Hasan',
      address: 'Ankara',
      telephone: '011011011',
      pets: 'abc'
    },
    {
      id: 1,
      name: 'Hasan',
      address: 'Ankara',
      telephone: '011011011',
      pets: 'abc'
    },
    {
      id: 1,
      name: 'Hasan',
      address: 'Ankara',
      telephone: '011011011',
      pets: 'abc'
    }
  ]
  return (
    <div style={{ padding: 24 }}>
      <h1>Tablo Örneği</h1>
      <div style={{ width: 640 }}>
        <Tablo columns={columns} items={data} />
      </div>
    </div>
  )
}

export default App
