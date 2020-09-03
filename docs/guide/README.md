---
title: Getting Started
---


## Installation

Package installation

```bash
# With npm package manager
npm install selectize @isneezy/vue-selectize --save
# OR with yarn package manager
yarn add selectize @isneezy/vue-selectize
```

## Basic usage

You can import the library and register as a component to make the
component globally available

```js
import Vue from 'vue'
import 'selectize/dist/css/selectize.default.css' // This is required, we use the same css as selectize.js
import VSelectize from '@isneezy/vue-selectize'
Vue.component('v-selectize', VSelectize)
```

Alternatively it is possible to import vue-selectize directly to components
in which it will be used

```js
// Vue SFC Example
// MyComponent.vue
import 'selectize/dist/css/selectize.default.css' // This is required, we use the same css as selectize.js
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

And finally at your component markup
```html
<template>
  <v-selectize v-model="selected" :options="['neat','awesome']"/>
</template>
```
