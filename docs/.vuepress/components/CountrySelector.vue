<template>
    <div>
        <div>Country:</div>
        <v-selectize :options="options" v-model="selected" key-by="id" label="name" :keys="['name', 'id']"/>
        <div>Current Value: {{ selected }}</div>
    </div>
</template>

<script>
import VSelectize from '@isneezy/vue-selectize'
import countries from './countries'
export default {
  name: 'country-selector',
  data: () => ({
    options: countries,
    selected: null
  }),
  components: {VSelectize}
}
</script>