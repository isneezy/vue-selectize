# vue-selectize
[![Netlify Status](https://api.netlify.com/api/v1/badges/613ef38b-8369-42fa-a744-60856cd37b18/deploy-status)](https://app.netlify.com/sites/vue-selectize/deploys)

> A Vanila Vue.js component that mimics the selectize behaviour
https://ivan.vilanculo.me/vue-selectize

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