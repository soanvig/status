<template>
  <header class="mdc-top-app-bar">
    <div class="mdc-top-app-bar__row">
      <section class="mdc-top-app-bar__section mdc-top-app-bar__section--align-start">
        <span class="mdc-top-app-bar__title">
          <slot /> 
        </span>
      </section>
    </div>
  </header>
</template>
<script>
import { MDCTopAppBar } from '@material/top-app-bar';

export default {
  name: 'top-bar',
  mounted () {
    new MDCTopAppBar(this.$el);
  }
}
</script>

<style scoped>
@import "~@material/top-app-bar/dist/mdc.top-app-bar.min.css";

.mdc-top-app-bar {
  position: static;
  margin-bottom: 40px;
}
</style>