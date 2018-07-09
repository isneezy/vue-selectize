# vue-selectize
A Vanila Vue.js component that mimics the selectize behaviour

## Installation
`yarn add selectize @isneezy/vue-selectize`

## Usage
```html
<template>
  <v-selectize v-model="selected" :options="['neat','awesome']"/>
</template>
```

```js
import 'selectize/dist/css/selectize.css'
import VSelectize from '@isneezy/vue-selectize'
export default {
  data: () => ({
    selected: ''
  }),
    components: {
    VSelectize
  }
}
```