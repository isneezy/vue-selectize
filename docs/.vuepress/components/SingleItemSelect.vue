<template>
    <div>
        <div>Beast:</div>
        <v-selectize :options="options" v-model="selected" placeholder="Select a person"/>
        <div>Current Value: {{ selected }}</div>
    </div>
</template>

<script>
import VSelectize from '@isneezy/vue-selectize'
export default {
  name: 'single-item-select',
  data: () => ({
    options: ['Chuck Testa', 'Nikola Tesla', 'Sage Cattabriga-Alosa'],
    selected: []
  }),
  components: {VSelectize}
}
</script>