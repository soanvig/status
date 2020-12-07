<template>
  <span class="material-icons">
    {{ icon }}
  </span>
</template>
<script>
export default {
  name: 'md-icon',
  props: {
    icon: String,
  },
}
</script>