<template>
    <div>
        <div>10 Countries:</div>
        <v-selectize :options="options" v-model="selected" :limit="limit" key-by="id" label="name" :keys="['name', 'id']"/>
        <div>Current Value: {{ selected }}</div>
    </div>
</template>

<script>
import VSelectize from '@isneezy/vue-selectize'
import countries from './countries'
export default {
  name: 'limit-dropdown-options',
  data: () => ({
    options: countries,
    selected: null,
    limit: 10
  }),
  components: {VSelectize}
}
</script>