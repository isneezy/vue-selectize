<template>
  <VSelectize v-model="selected" :options="options" key-by="username" label="username" :keys="['username', 'host']">
    <template v-slot:option="{option}">{{ option.username }}@{{ option.host }}</template>
    <template v-slot:item="{item}">{{ item.username }}@{{ item.host }}</template>
  </VSelectize>
</template>
<script>
  import VSelectize from '@isneezy/vue-selectize'
  export default {
    name: 'OptionSlot',
    components: { VSelectize },
    data: () => ({
      options: [{username: 'selectizejs', host: 'github.com'}],
      selected: {username: 'selectizejs', host: 'github.com'}
    })
  }
</script>
