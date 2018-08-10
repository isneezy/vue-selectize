<template>
    <div>
        <div>Tags:</div>
        <v-selectize :options="options" v-model="selected" multiple/>
        <div>Current Value: {{ selected }}</div>
    </div>
</template>

<script>
import VSelectize from '@isneezy/vue-selectize'
export default {
  name: 'tagging',
  data: () => ({
    options: ['neat', 'awesome'],
    selected: ['neat', 'awesome']
  }),
  components: {VSelectize}
}
</script>