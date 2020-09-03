<template>
  <div style="margin-top: 10px">
    <v-selectize v-model="value" :options="['Example', 'Vue-selectize', 'Nuxtjs']" multiple/>
    <p style="margin-top: 8px">You have selected: {{ valueAsTring }}</p>
  </div>
</template>
<script>
export default {
  data: () => ({
    value: ["Vue-selectize"]
  }),
  computed: {
    valueAsTring() {
      return this.value.join(", ");
    }
  }
};
</script>