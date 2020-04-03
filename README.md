# blueprint-basit-tablo

> Blueprintjs Tabanlı Basit React Tablo Bileşeni

[![NPM](https://img.shields.io/npm/v/blueprint-basit-tablo.svg)](https://www.npmjs.com/package/blueprint-basit-tablo) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Gereksinimler
styled-components ve blueprintjs kullandığı için önce bunlaarı yükleyin

#### npm
```bash
npm install --save @blueprintjs/core styled-components
```

#### yarn
```bash
yarn add @blueprintjs/core styled-components
```

## Yükleme

#### npm
```bash
npm install --save blueprint-basit-tablo
```

#### yarn
```bash
yarn add blueprint-basit-tablo
```

## Kullanım

Blueprintjs gereksinimlerini sağlayın. [BlueprintJS Getting Started](https://blueprintjs.com/docs/#blueprint/getting-started)

`columns` ve `items` prop'larına sütunları ve satırları verebilirsiniz. Sütunları verirken aşağıdaki üç şekildeki gibi kullanarak satırdan hücrenin nasıl çekileceğini de belirleyebilirsiniz. Satırda `id` sütunu olmasını tavsiye ederim. Yoksa index kullanılır.

```jsx
import React from 'react'

import { Tablo } from 'blueprint-basit-tablo'

const sutunlar = [
    'Ad',
    {
        title: 'Soyad',
        accessor: 'soyadi'
    },
    {
        title: 'Telefon',
        accessor: hucre => '0312' + hucre.tel
    }
]

const satirlar = [
    {
      id: 1,
      ad: 'Hasan',
      soyad: 'TEKGÜL',
      telefon: '011011011',
    },
    {
      id: 1,
      ad: 'Mahmut',
      soyad: 'TUNCER',
      telefon: '011011011',
    }
]

function App (props) {
  return <Tablo columns={sutunlar} items={satirlar} />
}
```

## License

MIT © [htekgulds](https://github.com/htekgulds)
