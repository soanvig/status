<template>
  <button class="mdc-button mdc-button--raised">
    <div class="mdc-button__ripple"></div>
    <span class="mdc-button__label">
      <slot />
    </span>
  </button>
</template>
<script>
import { MDCRipple } from '@material/ripple';

export default {
  name: 'md-button',
  mounted () {
    MDCRipple.attachTo(this.$el);
  }
}
</script>
<style scoped>
@import "~@material/button/dist/mdc.button.min.css";

</style>