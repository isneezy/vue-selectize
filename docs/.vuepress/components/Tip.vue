<template>
  <div class="p-4 border-l-4 border-green-500 bg-gray-200">
    <p class="mb-2 font-bold"><slot name="title">TIP</slot></p>
    <p>
      <slot></slot>
    </p>
  </div>
</template>
<script>
  export default {
    name: 'Tip'
  }
</script>
