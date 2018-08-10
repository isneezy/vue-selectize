<template>
  <div id="app" style="max-width: 920px; margin: 0 auto">
    <v-selectize :options="ex1Options"/>
    <v-selectize :options="ex1Options" multiple/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import VSelectize from './components/VSelectize'
import '/selectize/dist/css/selectize.default.css'

export default {
  name: 'app',
  data: () => ({
    ex1Options: ['awesome', 'neat']
  }),
  components: {
    VSelectize,
    HelloWorld
  }
}
</script>
